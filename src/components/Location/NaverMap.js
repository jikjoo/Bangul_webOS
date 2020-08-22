import React, { useEffect } from 'react';
import './Location.less';
import { loadNaverMap, getLocation } from '../../actions';
import { connect } from 'react-redux';
import { HOST } from '../../api';

const NaverMap = ({ isLoaded, onLoadMap, onGetLocation, location }) => {
    useEffect(() => {
        /* 
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.src = `http://${HOST}:${PORT}/location/naverNew.js`;
         */
        onGetLocation();
        if (isLoaded) {
            // loadNaverMap action으로 head에 네이버 API 추가한 후
            /* const { lat, long } = location;
            let naver = window.naver;
            console.log({ lat, long });
            const mapOptions = {
                center: new naver.maps.LatLng(lat, long),
                zoom: 14
            };

            const targetMap = document.getElementById('map');

            const map = new naver.maps.Map(targetMap, mapOptions); */

            const script = document.createElement('script');
            script.type = "text/javascript"
            //script.async = true;
            script.src = `${HOST}/location/naverMap.js`;
            document.body.appendChild(script);
        }
        else {
            onLoadMap();
        }
    }, [isLoaded, location.lat, location.lng])
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
        onGetLocation: () => dispatch(getLocation())
    };
};

const NaverMapContainer = connect(mapStateToProps, mapDispatchToProps)(NaverMap);


export default NaverMapContainer;