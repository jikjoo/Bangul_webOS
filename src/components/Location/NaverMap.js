import React, { useEffect } from 'react';
import './Location.less';
import { loadNaverMap, getLoacation } from '../../actions';
import { connect } from 'react-redux';

const NaverMap = ({ isLoaded, onLoadMap, onGetLocation,location }) => {
    useEffect(() => {
        /* 
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.src = `http://${HOST}:${PORT}/location/naverNew.js`;
         */
        if (isLoaded) {
            // loadNaverMap action으로 head에 네이버 API 추가한 후
            onGetLocation();
            const {lat,long} = location;
            let naver = window.naver;
            const mapOptions = {
                center: new naver.maps.LatLng(lat, long),
                zoom: 14
            };

            const targetMap = document.getElementById('map');

            const map = new naver.maps.Map(targetMap, mapOptions);
        }
        else {
            onLoadMap();
        }
    }, [isLoaded])
    return (
        <div className="box-map">
            <div id="map"></div>
        </div>

    )
}
//const NaverMap_ = Touchable({ activeProp: 'pressed' }, NaverMap);
//const NaverMap_ = touchDeco(NaverMap);
/* 
location : {
    country: "KR"
    code: "4143053000"
    r1: "경기도"
    r2: "의왕시"
    r3: "오전동"
    lat: 37.353538
    long: 126.971603
    net: "SK Broadband Co Ltd"
}
 */

const mapStateToProps = ({ check, location }) => ({
    isLoaded: check.location.isOn,
    location
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadMap: () => dispatch(loadNaverMap()),
        onGetLocation: () => dispatch(getLoacation())
    };
};

const NaverMapContainer = connect(mapStateToProps, mapDispatchToProps)(NaverMap);


export default NaverMapContainer;