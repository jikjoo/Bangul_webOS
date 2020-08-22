import React from 'react'
import './Video.less';
import { connect } from 'react-redux';
import { sendVideoURL, setSocket } from '../../actions';
import io from 'socket.io-client';
import VideoCall from './VideoCall'
import sample_dog from '../../../resources/sample_dog.jpg'
import BoxAlarm from '../Box/BoxAlarm';
import text from '../../../resources/text.json'

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      localStream: null,
      remoteStreamUrl: '',
      initiator: false,
      peer: null,
      full: false,
      connecting: false,
      waiting: true,
      micState: true,
      camState: true,
      socket: null
    }
    this.state = this.initialState;
  }
  videoCall = new VideoCall();

  componentDidMount() {
    // Video 컴퍼넌트 렌더링 된 직후, socket 연결 설정
    const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    const component = this;
    this.setState({ socket });
    const { target } = this.props;
    const roomId = `bangul${target}`;// this.props.match.params;
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
    // 화면 벗어나면, socket 통신 끊기
    this.state.socket.disconnect();
    this.setState(this.initialState);
    console.log('disconnect')
  }
  getUserMedia() {
    //내 마이크 확인해서, stream 얻고 state에 저장하기
    console.log("in getUserMedia")
    return new Promise((resolve) => {
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
        video: true,
        audio: true
      };
      navigator.mediaDevices.getUserMedia(op)
        .catch(function (error) {
          if (error.name !== 'NotFoundError') {
            throw error;
          }
          //마이크 못찾았을 때, 한번 더 찾는 코드. 사실상 의미 없음
          return navigator.mediaDevices.enumerateDevices()
            .then(function (devices) {
              const mic = devices.find(function (device) {
                return device.kind === 'audioinput';
              });
              const constraints = {
                video: false,
                audio: mic && op.audio
              };
              console.log("enumerateDevices", { audio: constraints.audio, error })
              navigator.mediaDevices.getUserMedia(constraints)
                .then(stream => {
                  this.setState({ localStream: stream });
                  //this.localVideo.srcObject = stream;
                  console.log('return enumerate getUserMedia')
                  resolve();
                })
                .catch(() => resolve())
            });
        })
        .then(
          stream => {
            this.setState({ localStream: stream });
            //this.localVideo.srcObject = stream;
            console.log('return getUserMedia')
            resolve();
          },
          () => { }
        );
    });
  }

  setAudioLocal() {
    // 내 마이크 끄고 키기 설정
    if (this.state.localStream.getAudioTracks().length > 0) {
      this.state.localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
    }
    this.setState(({ micState }) => ({ micState: !micState }))
  }

  setVideoLocal() {
    //내 비디오 끄고 키기 설정 
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
        this.setState({localStream: stream });
        this.localVideo.srcObject = stream;
        this.state.peer.addStream(stream);
      });
    }
   */
  enter = roomId => {
    // 상대방이랑 연결됐을 때.
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
    // 상대방 비디오 스트림 받기
    /* peer.on('stream', stream => {
      this.remoteVideo.srcObject = stream;
      this.setState({ connecting: false, waiting: false });
    }); */
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
    const { localStream } = this.state;
    return (
      <div className='box-video'>
        {/* <video
          autoPlay
          id='localVideo'
          className="video local"
          muted
          ref={video => (this.localVideo = video)}
        /> */}
        <video
          autoPlay
          className={`video remote ${
            this.state.connecting || this.state.waiting ? 'hide' : ''
            }`}
          id='remoteVideo'
          src="http://172.30.1.42:8080/stream"
          poster={sample_dog}
          ref={video => (this.remoteVideo = video)}
        />
        {this.props.children}

        <div className='status'>
          {this.state.connecting && (
            <p>{text.connecting_video}</p>
          )}
          {this.state.waiting && (
            <p>{text.waiting_device}</p>
          )}
          {this.renderFull()}
        </div>
        <BoxAlarm open={!localStream} type='mic_not_found' />
      </div>
    );
  }
}
/*
video : {
    home : {
       url : '',
       socket
    },
    kennel : {
        url : '',
        socket
    }
}
*/

const mapStateToProps = ({ video }) => ({
  video
});
const mapDispatchToProps = (dispatch) => {
  return {
    onURL: (target) => dispatch(sendVideoURL(target)),
    setSocket: ({ target, socket }) => dispatch(setSocket({ target, socket }))
  };
};
const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoContainer;