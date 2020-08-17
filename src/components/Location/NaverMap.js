import React, { useEffect } from 'react';
import './Location.less';
import { loadNaverMap } from '../../actions';
import { connect } from 'react-redux';

const NaverMap = ({ isLoaded, onLoadMap }) => {
    useEffect(() => {
        /* 
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.src = `http://${HOST}:${PORT}/location/naverNew.js`;
         */
        if (isLoaded) {
            // loadNaverMap action으로 head에 네이버 API 추가한 후
            let naver = window.naver;
            const mapOptions = {
                center: new naver.maps.LatLng(37.3595704, 127.105399),
                zoom: 14
            };

            const targetMap = document.getElementById('map');

            const map = new naver.maps.Map(targetMap, mapOptions);
        }
        else {
            onLoadMap();
        }
    })
    return (
        <div className="box-map">
            <div id="map"></div>
        </div>

    )
}
//const NaverMap_ = Touchable({ activeProp: 'pressed' }, NaverMap);
//const NaverMap_ = touchDeco(NaverMap);


const mapStateToProps = ({ check }) => ({
    isLoaded: check.location.isOn
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadMap: () => dispatch(loadNaverMap())
    };
};

const NaverMapContainer = connect(mapStateToProps, mapDispatchToProps)(NaverMap);


export default NaverMapContainer;