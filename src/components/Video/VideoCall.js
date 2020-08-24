import Peer from 'simple-peer'

export default class VideoCall {
    // webRTC 연결 세부 설정
    peer = null 
    init = (initiator,stream=null) => {
        const opts = {
            initiator: initiator,
            //stream: stream,
            trickle: false,
            reconnectTimer: 1000,
            iceTransportPolicy: 'relay',
            config: {
                iceServers: [
                    { urls: process.env.REACT_APP_STUN_SERVERS.split(',') },
                    {
                        urls: process.env.REACT_APP_TURN_SERVERS.split(','),
                        username: process.env.REACT_APP_TURN_USERNAME,
                        credential: process.env.REACT_APP_TURN_CREDENCIAL
                    },
                ]
            }
        }
        if(stream) opts.stream = stream;
        this.peer = new Peer(opts)
        return this.peer
    }
    connect = (otherId) => {
        this.peer.signal(otherId)
    }  
} 