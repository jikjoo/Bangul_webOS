import React, { useEffect, useState } from 'react'
import VideoPlayer, { MediaControls } from '@jikjoo/moonstone/VideoPlayer';
import { BtnVideo } from '../Button';
import { BoxVideoBtn } from '../Box';
import './Video.less';
import { connect } from 'react-redux';
import { sendVideoURL } from '../../actions';
import io from 'socket.io-client';
import VideoCall from './VideoCall'

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localStream: {},
      remoteStreamUrl: '',
      streamUrl: '',
      initiator: false,
      peer: {},
      full: false,
      connecting: false,
      waiting: true,
      micState: true,
      camState: true,
    };
  }
  videoCall = new VideoCall();

  componentDidMount() {
    const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    const component = this;
    this.setState({ socket });
    const roomId = 'fish';// this.props.match.params;
    this.getUserMedia().then(() => {
      socket.emit('join', { roomId: roomId });
    });

    socket.on('init', () => {
      component.setState({ initiator: true });
    });
    socket.on('ready', () => {
      component.enter(roomId);
    });
    socket.on('desc', data => {
      if (data.type === 'offer' && component.state.initiator) return;
      if (data.type === 'answer' && !component.state.initiator) return;
      component.call(data);
    });
    socket.on('disconnected', () => {
      component.setState({ initiator: true });
    });
    socket.on('full', () => {
      component.setState({ full: true });
    });
  }

  componentWillUnmount() {
    const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    socket.emit('disconnect')
    console.log('disconnect')
  }
  getUserMedia(cb) {
    console.log("in getUserMedia")
    return new Promise((resolve, reject) => {
      const { navigator } = window;
      /* navigator.getUserMedia = navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia; */
      const op = {
        /* video: {
          width: { min: 160, ideal: 640, max: 1280 },
          height: { min: 120, ideal: 360, max: 720 }
        } */
        video: false,
        audio: true
      };
      navigator.mediaDevices.getUserMedia(op)
        .catch(function (error) {
          if (error.name !== 'NotFoundError') {
            throw error;
          }
          return navigator.mediaDevices.enumerateDevices()
            .then(function (devices) {
              var mic = devices.find(function (device) {
                return device.kind === 'audioinput';
              });
              var constraints = {
                video: false,
                audio: mic && op.audio
              };
              console.log("enumerateDevices", { audio: constraints.audio, error })
              navigator.mediaDevices.getUserMedia(constraints)
                .then(stream => {
                  this.setState({ streamUrl: stream, localStream: stream });
                  this.localVideo.srcObject = stream;
                  console.log('return enumerate getUserMedia')
                  resolve();
                })
            });
        })
        .then(
          stream => {
            this.setState({ streamUrl: stream, localStream: stream });
            this.localVideo.srcObject = stream;
            console.log('return getUserMedia')
            resolve();
          },
          () => { }
        );
    });
  }

  setAudioLocal() {
    if (this.state.localStream.getAudioTracks().length > 0) {
      this.state.localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
    }
    this.setState({
      micState: !this.state.micState
    })
  }

  setVideoLocal() {
    if (this.state.localStream.getVideoTracks().length > 0) {
      this.state.localStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
    }
    this.setState({
      camState: !this.state.camState
    })
  }
  /* 
    getDisplay() {
      window.navigator.mediaDevices.getUserMedia().then(stream => {
        stream.oninactive = () => {
          this.state.peer.removeStream(this.state.localStream);
          this.getUserMedia().then(() => {
            this.state.peer.addStream(this.state.localStream);
          });
        };
        this.setState({ streamUrl: stream, localStream: stream });
        this.localVideo.srcObject = stream;
        this.state.peer.addStream(stream);
      });
    }
   */
  enter = roomId => {
    this.setState({ connecting: true });
    const peer = this.videoCall.init(
      this.state.localStream,
      this.state.initiator
    );
    this.setState({ peer });

    peer.on('signal', data => {
      const signal = {
        room: roomId,
        desc: data
      };
      this.state.socket.emit('signal', signal);
    });
    peer.on('stream', stream => {
      this.remoteVideo.srcObject = stream;
      this.setState({ connecting: false, waiting: false });
    });
    peer.on('error', function (err) {
      console.log(err);
    });
  };

  call = otherId => {
    this.videoCall.connect(otherId);
  };
  renderFull = () => {
    if (this.state.full) {
      return <p>The room is full</p>;
    }
  };
  render() {
    return (
      <div className='box-video'>
        <video
          autoPlay
          id='localVideo'
          className="video local"
          muted
          ref={video => (this.localVideo = video)}
        />
        <video
          autoPlay
          className={`video remote ${
            this.state.connecting || this.state.waiting ? 'hide' : ''
            }`}
          id='remoteVideo'
          ref={video => (this.remoteVideo = video)}
        />
        {this.props.children}

        <div className='status'>
          {this.state.connecting && (
            <p>Establishing connection...</p>
          )}
          {this.state.waiting && (
            <p>Waiting for someone...</p>
          )}
          {this.renderFull()}
        </div>

      </div>
    );
  }
}
/*
video : {
    home : {
       url : ''
    },
    kennel : {
        url : ''
    }
}
*/

const mapStateToProps = ({ video }) => ({
  video
});
// 장치의 연결을 확인하는 action과 onCheck 함수 연결하기
const mapDispatchToProps = (dispatch) => {
  return {
    onURL: (target) => dispatch(sendVideoURL(target))
  };
};
// withRouter는 this.props.history 사용할 수 있도록 하기 : 다른 화면으로 넘어가도록
const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoContainer;