import React, { useEffect, useState } from 'react'
import VideoPlayer, { MediaControls } from '@jikjoo/moonstone/VideoPlayer';
import { BtnVideo } from '../Button';
import { BoxVideoBtn } from '../Box';
import './Video.less';
import { connect } from 'react-redux';
import { sendVideoURL, setSocket } from '../../actions';
import io from 'socket.io-client';
import VideoCall from './VideoCall'
import {XMLHttpRequest} from 'w3c-xmlhttprequest'
import navigator from 'navigator'
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


const pcOptions = {
  optional: [
      // Deprecated:
      //{RtpDataChannels: false},
      //{DtlsSrtpKeyAgreement: true}
  ]
};
var iceCandidates = [];
var datachannel;
var pc;
var keys = [];
var trickle_ice = true;
var remoteDesc = false;
var mediaConstraints = {
  optional: [],
  mandatory: {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
  }
};

const pcConfig = {"iceServers": [
  {"urls": ["stun:stun.l.google.com:19302", "stun:" + "192.168.137.112" + ":3478"]}
]};

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
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
      socket: null
    }
    this.state = this.initialState;
  }
  videoCall = new VideoCall();

  componentDidMount() {

    addGyronormScript();

    function httpGetAsync(theUrl, callback) {
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

  function addGyronormScript() {
      var srcUrl = "https://rawgit.com/dorukeker/gyronorm.js/master/dist/gyronorm.complete.min.js"
      httpGetAsync(srcUrl, function (text) {
          var script = document.createElement("script");
          script.setAttribute("src", srcUrl);
      });
  }

   const ws = new W3CWebSocket('ws://192.168.137.112:8080/stream/webrtc');

   function call(stream) {
    iceCandidates = [];
    remoteDesc = false;
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

    ws.onopen = () => {
      console.log('Websocket Client Connected');
      call();
    }

    ws.onmessage = (message) => {
      const msg = JSON.parse(message.data);

      if ( msg.what !== 'undefined') {
        var what = msg.what;
        var data = msg.data;
      }
    console.log("message = " + what);
//    console.log("data = " + data);

      switch(what) {
        case "offer":
         pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(data)),
            function onRemoteSdpSuccess() {
                remoteDesc = true;
                addIceCandidates();
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
          var candidate = new RTCIceCandidate({sdpMLineIndex: elt.sdpMLineIndex, candidate: elt.candidate});
          iceCandidates.push(candidate);
          
          if (remoteDesc) addIceCandidates();
             
          document.documentElement.style.cursor = 'default';
          break;
        case "icecandidates": {
          var candidates = JSON.parse(msg.data);
          for (var i = 0; candidates && i < candidates.length; i++) {
              elt = candidates[i];
              let candidate = new RTCIceCandidate({sdpMLineIndex: elt.sdpMLineIndex, candidate: elt.candidate});
              iceCandidates.push(candidate);
          }
          if (remoteDesc) addIceCandidates();
          document.documentElement.style.cursor = 'default';
          break;
        }
      }

     // console.log("message =", msg);
    }

    function createPeerConnection() {
      try {
      const pcConfig_ = pcConfig;
      try {
       // const ice_servers = '[{"urls":"stun:stun4.l.google.com:19302"},{"urls": "turn:numb.viagenie.ca","username":"pillast777@naver.com","credential":"fishnchips1!"}]'
       
        var ice_servers = ""
        if(ice_servers) pcConfig_.iceServers = JSON.parse(ice_servers);
      }
      catch {
        
      }
    
      console.log(JSON.stringify(pcConfig_));
      pc = new RTCPeerConnection(pcConfig_, pcOptions);

      pc.onicecandidate = onIceCandidate;
      
      if ('ontrack' in pc) {
        pc.ontrack = onTrack;
      } else {
        pc.onaddstream = onRemoteStreamAdded; // deprecated
      }
      pc.onremovestream = onRemoteStreamRemoved;
      pc.ondatachannel = onDataChannel;
      console.log("peer connection successfully created!");
    }
     catch {

      }
    }

    function onRemoteStreamAdded(event) {
      console.log("Remote stream added:", event.stream);
      var remoteVideoElement = document.getElementById('remote-video');
      remoteVideoElement.srcObect = event.stream;
    //  remoteVideoElement.play();
    }

    function onRemoteStreamRemoved(event) {
      var remoteVideoElement = document.getElementById('remote-video');
      remoteVideoElement.srcObject = null;
      remoteVideoElement.src = ''; // TODO: remove
    }

    function onDataChannel(event) {
      console.log("onDataChannel()");
      datachannel = event.channel;

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

    function onTrack(event) {
      console.log("Remote track!");
      var remoteVideoElement = document.getElementById('remote-video');
      remoteVideoElement.srcObject = event.streams[0];
    //  remoteVideoElement.play();
   }

    function onIceCandidate(event) {
        if(event.candidate){
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
        }else {
          console.log("End of candidates.");
      }
    }

    function addIceCandidates() {
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
  }

  componentWillUnmount() {
    // 화면 벗어나면, socket 통신 끊기

  }
  getUserMedia(cb) {

  }
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
        {}
        <video
          autoPlay
          className={`video remote ${
            this.state.connecting || this.state.waiting ? 'hide' : ''
            }`}
          id='remote-video'
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