import React, { useEffect, useState } from 'react';
import axios from '../../api';
import config from '../../../resources/config.json';
import Touchable from '@enact/ui/Touchable';
import './Kakao.less';
import { loadKakaoMap } from '../../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const KakaoMap = ({ isLoaded, onLoadMap }) => {
    const [html, setHtml] = useState('');
    const { HOST, PORT } = config.SERVER;
    const history = useHistory()
    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.src = `http://${HOST}:${PORT}/location/kakaoNew.js`;
        //development mode
        //script.src = `http://localhost:${PORT}/location/kakaoNew.js`
        if (isLoaded) {
            if (window.kakao === undefined)
                console.log("kakao unloaded");
            else {
                let kakao = window.kakao;
                kakao.maps.load(() => {
                    console.log('useEffect on KakaoMap')
                    document.body.appendChild(script);
                    //Object.defineProperty(window.navigator, 'userAgent', { get: function () { return 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36'; } })
                    /* var ANDROID = window.navigator.userAgent.indexOf('Android') >= 0;
                    var TOUCHABLE = ('ontouchstart' in document.documentElement) &&
                        (window.navigator.userAgent.indexOf('Chrome') < 0 || ANDROID); */
                })
            }
        }
        else {
            onLoadMap();
        }
    })
    return (
        <div className="kakao-map">
            <div className="map_wrap">
                <div id="map" ></div>
                <ul id="category">
                    <li id="CE7" data-order="4">
                        <span className="category_bg cafe"></span>
            애견카페
        </li>
                    <li id="OL7" data-order="3">
                        <span className="category_bg oil"></span>
            주유소
        </li>
                </ul>
            </div>
        </div>

    )
}
//const KakaoMap_ = Touchable({ activeProp: 'pressed' }, KakaoMap);
//const KakaoMap_ = touchDeco(KakaoMap);


const mapStateToProps = ({ location }) => ({
    isLoaded: location.isLoaded
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadMap: () => dispatch(loadKakaoMap())
    };
};

const KakaoMapContainer = connect(mapStateToProps, mapDispatchToProps)(KakaoMap);


export default KakaoMapContainer;