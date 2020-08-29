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
import { XMLHttpRequest } from 'w3c-xmlhttprequest'
const { navigator } = window;
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  getUserMedia,
} from 'webrtc-adapter';
import { w3cwebsocket as W3CWebSocket } from "websocket";
RTCPeerConnection = window.RTCPeerConnection || /*window.mozRTCPeerConnection ||*/ window.webkitRTCPeerConnection;
RTCSessionDescription = /*window.mozRTCSessionDescription ||*/ window.RTCSessionDescription;
RTCIceCandidate = /*window.mozRTCIceCandidate ||*/ window.RTCIceCandidate;
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia;
var URL = window.URL || window.webkitURL;

//ar iceCandidates = [];
//var datachannel;
//var pc;
//var remoteDesc = false;



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
      ws: null,
      pc: null,
      remoteDesc: false,
      iceCandidates: [],
      datachannel: null
    }
    this.state = this.initialState;
  }
  videoCall = new VideoCall();

  componentDidMount() {
    // Video 컴퍼넌트 렌더링 된 직후, socket 연결 설정    
    this.addGyronormScript();
    const ws = new W3CWebSocket(process.env.REACT_APP_SIGNALING_SERVER);
    this.setState({ ws });
    ws.onopen = () => {
      console.log('Websocket Client Connected');
      this.call();
    }
    ws.onmessage = (message) => {
      const msg = JSON.parse(message.data);

      if (msg.what !== 'undefined') {
        var what = msg.what;
        var data = msg.data;
      }
      console.log("message = " + what);
      //    console.log("data = " + data);
      const { pc, remoteDesc, iceCandidates } = this.state;
      var mediaConstraints = {
        optional: [],
        mandatory: {
          OfferToReceiveAudio: true,
          OfferToReceiveVideo: true
        }
      };
      switch (what) {
        case "offer":
          pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(data)),
            function onRemoteSdpSuccess() {
              //remoteDesc = true;
              this.setState({ remoteDesc });
              this.addIceCandidates();
              console.log('onRemoteSdpSucces()');
              pc.createAnswer(function (sessionDescription) {
                pc.setLocalDescription(sessionDescription);
                var request = {
                  what: "answer",
                  data: JSON.stringify(sessionDescription)
                };
                ws.send(JSON.stringify(request));
                console.log(request);
              }, function (error) {
                //   alert("Failed to createAnswer: " + error);
              }, mediaConstraints);
            },
            function onRemoteSdpError(event) {
              //alert('Failed to set remote description (unsupported codec on this browser?): ' + event);
              //stop();
            }
          );
        case "answer":
          break;
        case "message":
          break;
        case "iceCandidate":
          //     console.log("asdfasdfasdf")
          if (!msg.data) {
            console.log("Ice Gathering Complete");
            break;
          }

          var elt = JSON.parse(msg.data);
          var candidate = new RTCIceCandidate({ sdpMLineIndex: elt.sdpMLineIndex, candidate: elt.candidate });
          //iceCandidates.push(candidate);
          this.setState({ iceCandidates: [...iceCandidates, candidate] });
          if (remoteDesc) this.addIceCandidates();

          document.documentElement.style.cursor = 'default';
          break;
        case "icecandidates": {
          var candidates = JSON.parse(msg.data);
          for (var i = 0; candidates && i < candidates.length; i++) {
            elt = candidates[i];
            let candidate = new RTCIceCandidate({ sdpMLineIndex: elt.sdpMLineIndex, candidate: elt.candidate });
            //iceCandidates.push(candidate);
            this.setState({ iceCandidates: [...iceCandidates, candidate] });
          }
          if (remoteDesc) this.addIceCandidates();
          document.documentElement.style.cursor = 'default';
          break;
        }
      }

      // console.log("message =", msg);
    }


    /* const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    const component = this;
    this.setState({ socket });
    const { target } = this.props;
    const talkReady = target === 'home';
    this.setState({ talkReady });
    const roomId = `bangul${target}`;// this.props.match.params;
    talkReady ? this.getUserMedia().then(() => {
      socket.emit('join', { roomId: roomId });
    }) :
      socket.emit('join', { roomId: roomId });

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
    }); */
  }
  addGyronormScript() {
    var srcUrl = "https://rawgit.com/dorukeker/gyronorm.js/master/dist/gyronorm.complete.min.js"
    this.httpGetAsync(srcUrl, function (text) {
      var script = document.createElement("script");
      script.setAttribute("src", srcUrl);
    });
  }
  httpGetAsync(theUrl, callback) {
    try {
      console.log("asdf");
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          callback(xmlHttp.responseText);
        }
      };
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.send(null);
      console.log(xmlHttp)
    } catch (e) {
      console.error(e);
    }
  }

  call(stream) {
    iceCandidates = [];
    //remoteDesc = false;
    this.setState({ remoteDesc: false })
    const { pc, ws } = this.state;
    createPeerConnection();
    if (stream) {
      pc.addStream(stream);
    }
    var request = {
      what: "call",
      options: {
        force_hw_vcodec: false,
        vformat: "60",
        trickle_ice: true
      }
    };
    ws.send(JSON.stringify(request));
    console.log("call(), request=" + JSON.stringify(request));
  }

  onRemoteStreamAdded(event) {
    console.log("Remote stream added:", event.stream);
    //var remoteVideoElement = document.getElementById('remote-video');
    //remoteVideoElement.srcObect = event.stream;
    this.remoteVideo.srcObject = event.stream;
    //  remoteVideoElement.play();
  }

  onRemoteStreamRemoved(event) {
    //var remoteVideoElement = document.getElementById('remote-video');
    //remoteVideoElement.srcObject = null;
    //remoteVideoElement.src = ''; // TODO: remove
    this.remoteVideo.srcObject = null;
    this.remoteVideo.src='';
  }

  onDataChannel(event) {
    console.log("onDataChannel()");
    //datachannel = event.channel;
    this.setState({ datachannel: event.channel });
    event.channel.onopen = function () {
      console.log("Data Channel is open!");
      //      document.getElementById('datachannels').disabled = false;
    };

    event.channel.onerror = function (error) {
      console.error("Data Channel Error:", error);
    };

    event.channel.onmessage = function (event) {
      console.log("Got Data Channel Message:", event.data);
      //      document.getElementById('datareceived').value = event.data;
    };

    //    event.channel.onclose = function () {
    //        datachannel = null;
    //      document.getElementById('datachannels').disabled = true;
    //      console.log("The Data Channel is Closed");
    // };
  }

  onTrack(event) {
    console.log("Remote track!");
    //var remoteVideoElement = document.getElementById('remote-video');
    //remoteVideoElement.srcObject = event.streams[0];
    this.remoteVideo.srcObject = event.streams[0];
    //  remoteVideoElement.play();
  }

  onIceCandidate(event) {
    if (event.candidate) {
      const candidate = {
        sdpMLineIndex: event.candidate.sdpMLineIndex,
        sdpMid: event.candidate.sdpMid,
        candidate: event.candidate.candidate
      }
      const request = {
        what: "addIceCandidate",
        data: JSON.stringify(candidate)
      }
      ws.send(JSON.stringify(candidate));
    } else {
      console.log("End of candidates.");
    }
  }

  addIceCandidates() {
    iceCandidates.forEach(function (candidate) {
      pc.addIceCandidate(candidate,
        function () {
          console.log("IceCandidate added: " + JSON.stringify(candidate));
        },
        function (error) {
          console.error("addIceCandidate error: " + error);
        }
      );
    });
    iceCandidates = [];
  }

  componentWillUnmount() {
    // 화면 벗어나면, socket 통신 끊기
   /*  if (this.state.localStream) {
      this.state.localStream.getTracks().forEach(track => {
        track.stop();
      })
    }
    this.state.socket.disconnect();
    this.setState(this.initialState);
    console.log('disconnect') */
  }
  /* getUserMedia() {
    //내 마이크 확인해서, stream 얻고 state에 저장하기
    console.log("in getUserMedia")
    return new Promise((resolve) => {
      const { navigator } = window;
      const op = {
        video: false,
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

  } */

  createPeerConnection() {
    const pcConfig = {
      "iceServers": [
        { "urls": process.env.REACT_APP_STUN_SERVERS.split(',') }
      ]
    };
    const pcOptions = {
      optional: [
        // Deprecated:
        //{RtpDataChannels: false},
        //{DtlsSrtpKeyAgreement: true}
      ]
    };
    try {
      const pcConfig_ = pcConfig;
      try {
        // const ice_servers = '[{"urls":"stun:stun4.l.google.com:19302"},{"urls": "turn:numb.viagenie.ca","username":"pillast777@naver.com","credential":"fishnchips1!"}]'

        var ice_servers = ""
        if (ice_servers) pcConfig_.iceServers = JSON.parse(ice_servers);
      }
      catch {

      }

      console.log(JSON.stringify(pcConfig_));
      pc = new RTCPeerConnection(pcConfig_, pcOptions);

      pc.onicecandidate = this.onIceCandidate;

      if ('ontrack' in pc) {
        pc.ontrack = this.onTrack;
      } else {
        pc.onaddstream = this.onRemoteStreamAdded; // deprecated
      }
      pc.onremovestream = this.onRemoteStreamRemoved;
      pc.ondatachannel = this.onDataChannel;
      this.setState({ pc });
      console.log("peer connection successfully created!");
    }
    catch {

    }
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
  /* 
  setAudioLocal() {
    // 내 마이크 끄고 키기 설정  -> BtnTalk로
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
   
    getDisplay() {
      // 내 화면 전송
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
  /* enter = roomId => {
    // 상대방이랑 연결됐을 때.
    this.setState({ connecting: true });
    const { talkReady } = this.state;
    const peer = talkReady ? this.videoCall.init(
      this.state.initiator,
      this.state.localStream
    ) : this.videoCall.init(this.state.initiator);
    this.setState({ peer });

    peer.on('signal', data => {
      const signal = {
        room: roomId,
        desc: data
      };
      this.state.socket.emit('signal', signal);
    });
    // 상대방 비디오 스트림 받기
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
  }; */
  renderFull = () => {
    if (this.state.full) {
      return <p>The room is full</p>;
    }
  };
  render() {
    const { localStream, talkReady } = this.state;
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
          {this.renderFull()}
        </div>
        <BoxAlarm open={!localStream && talkReady} type='mic_not_found' />
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