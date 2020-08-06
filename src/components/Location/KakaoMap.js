import React, { useEffect, useState } from 'react';
import axios from '../../api';
import config from '../../../resources/config.json';
import Touchable from '@enact/ui/Touchable';
import './Kakao.less';
import { loadKakaoMap } from '../../actions';
import { connect } from 'react-redux';

const KakaoMap = ({isLoaded,onLoadMap}) => {
    const [html, setHtml] = useState('');
    const { HOST, PORT } = config.SERVER;
    useEffect(() => {
        if(!isLoaded){
            onLoadMap();
        }
    }, [])
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
    isLoaded : location.isLoaded
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadMap: () => dispatch(loadKakaoMap())
    };
};

const KakaoMapContainer = connect(mapStateToProps, mapDispatchToProps)(KakaoMap);


export default KakaoMapContainer;