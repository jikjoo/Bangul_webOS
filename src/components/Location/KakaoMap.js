import React, { useEffect, useState } from 'react';
import axios from '../../api';
import config from '../../../resources/config.json';
import './Kakao.less';

const KakaoMap = (props) => {
    const [html, setHtml] = useState('');
    const { HOST, PORT } = config.SERVER;
    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.async = true;
        script.src = "http://dapi.kakao.com/v2/maps/sdk.js?appkey=aefdc433d657b3802f48149819d88496&libraries=services&autoload=false";
        document.head.appendChild(script);
        script.onload = () => {
            if (window.kakao !== undefined) {
                let Kakao = window.kakao;
                // 마커 상세정보 오버레이
                Kakao.maps.load(() => {
                    console.log("kakao loaded")
                    const script2 = document.createElement('script');
                    script2.type = "text/javascript"
                    script2.src = `http://${HOST}:${PORT}/location/kakaoNew.js`;
                    document.body.appendChild(script2);
                })
            }
        }

    })
    return (
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
    )
}

export default KakaoMap;

/*
class LocationView extends React.Component {
    constructor() {
        super();
        this.state = { html: '' }
    }
    componentDidMount() {

        axios.get(`/location/map`)
            .then(res => {
                console.log(res)
                const { html, src, js } = res.data
                this.setState({ html: html });
                const script = document.createElement('script');
                script.type = "text/javascript"
                script.async = true;
                script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=aefdc433d657b3802f48149819d88496&libraries=services&autoload=false";
                document.head.appendChild(script);
                script.onload = () => {
                    //console.log({window:window, kakao:kakao})
                }
                return () => {
                    document.head.removeChild(script);

                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        function createMarkup(html) {
            return { __html: html };
        }
        return (
            <Panel>
                <Header title="위치 정보" />
                <BtnGoMain />
                <div s dangerouslySetInnerHTML={createMarkup(this.state.html)} />
                <source src="https://github.com/jikjoo/Bangul_webOS/issues/3"></source>
            </Panel>
        )

    }
}
 */