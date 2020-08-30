import React from 'react'
import './Video.less';
import { connect } from 'react-redux';
import { sendVideoURL, setSocket, setLocalStream } from '../../actions';
import io from 'socket.io-client';
import VideoCall from './VideoCall'
import sample_dog from '../../../resources/sample_dog.jpg'
import BoxAlarm from '../Box/BoxAlarm';
import text from '../../../resources/text.json'
import PropTypes from 'prop-types';
import { MicNotFound } from '.';
import WebrtcSession from './webrtc';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      localStream: null,
      initiator: false,
      peer: null,
      full: false,
      connecting: false,
      waiting: true,
      socket: null,
      talkReady: false,
      micFound: true
    }
    this.state = this.initialState;
    this.onStream = this.onStream.bind(this);
  }

  componentDidMount() {
    // Video 컴퍼넌트 렌더링 된 직후, socket 연결 설정
    const url = process.env.REACT_APP_SIGNALING_SERVER,
      options = {
        iceServers: [
          { urls: process.env.REACT_APP_STUN_SERVERS.split(',') },
          {
            urls: process.env.REACT_APP_TURN_SERVERS.split(','),
            username: process.env.REACT_APP_TURN_USERNAME,
            credential: process.env.REACT_APP_TURN_CREDENCIAL
          }],
        useH264: false,
        resolution: 60, // 1280x720 30fps
      }
    try {
      this.session = new WebrtcSession(url, options);
      this.session.setOnStreamCallback(this.onStream);
      this.session.setOnCloseCallback(() => { console.log('close') });
      this.session.setOnMessageCallback((msg) => { console.log(`message = ${msg}`) })
      this.session.setOnDataChannelCallback(datachannel => {
        this.datachannel = datachannel;
      })
      this.session.call();
    } catch (e) {
      throw e;
    }
  }

  componentWillUnmount() {
    // 화면 벗어나면, socket 통신 끊기
    this.session.hangup();
  }

  onStream(stream) {
    this.remoteVideo.srcObject = stream;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.talkOn !== nextProps.talkOn) {
      // 내 마이크 끄고 키기 설정  -> BtnTalk로
      if (this.state.localStream &&
        this.state.localStream.getAudioTracks().length > 0) {
        this.state.localStream.getAudioTracks().forEach(track => {
          track.enabled = nextProps.talkOn;
        });
      }
    }
  }

  render() {
    const { micFound, talkReady } = this.state;
    const { audioOn } = this.props;
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
          muted={!audioOn}
          className={`video remote ${
            this.state.connecting || this.state.waiting ? 'hide' : ''
            }`}
          id='remoteVideo'
          //src="http://172.30.1.42:8080/stream"
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
        </div>
        <BoxAlarm open={!micFound && talkReady} type='mic_not_found' />
        <MicNotFound notFound={!micFound && talkReady} />
      </div>
    );
  }
}

Video.propTypes = {
  target: PropTypes.oneOf(['home', 'kennel']),
  localStream: PropTypes.any,
  talkOn: PropTypes.bool,
  audioOn: PropTypes.bool
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
    },
    talkOn : true,
    audioOn : true
}
*/

const mapStateToProps = ({ video }) => ({
  video,
  talkOn: video.talkOn,
  audioOn: video.audioOn
});
const mapDispatchToProps = (dispatch) => {
  return {
    onURL: (target) => dispatch(sendVideoURL(target)),
    setSocket: ({ target, socket }) => dispatch(setSocket({ target, socket })),
    setLocalStream: (localStream) => dispatch(setLocalStream(localStream))
  };
};
const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoContainer;