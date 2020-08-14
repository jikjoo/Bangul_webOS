import React, { useEffect, useState } from 'react';
import axios, { HOST, PORT } from '../../api';
import Touchable from '@enact/ui/Touchable';
import './Location.less';
import { loadNaverMap } from '../../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const NaverMap = ({ isLoaded, onLoadMap }) => {
    const [html, setHtml] = useState('');
    const history = useHistory()
    useEffect(() => {
        /* 
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.src = `http://${HOST}:${PORT}/location/naverNew.js`;
         */
        if (isLoaded) {
            if (window.naver === undefined)
                console.log("naver unloaded");
            else {
                let naver = window.naver;
                var mapOptions = {
                    center: new naver.maps.LatLng(37.3595704, 127.105399),
                    zoom: 14
                };

                var targetMap = document.getElementById('map');

                var map = new naver.maps.Map(targetMap, mapOptions);
            }
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