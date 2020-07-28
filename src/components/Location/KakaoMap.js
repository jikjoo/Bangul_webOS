import React, { useEffect, useState } from 'react';
import axios from '../../api';

const KakaoMap = (props) => {
    const [html, setHtml] = useState('');
    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=aefdc433d657b3802f48149819d88496&libraries=services&autoload=false";
        document.head.appendChild(script);
        axios.get(`/location/map`)
            .then(res => {
                console.log(res)
                const { html, src, js } = res.data
                setHtml(html);

            })
            .catch(err => {
                console.log(err)
            })
        script.onload = () => {
            if (window.kakao !== undefined) {
                let Kakao = window.kakao;
                // 마커 상세정보 오버레이
                Kakao.maps.load(() => {
                    console.log("kakao loaded")
                    const script2 = document.createElement('script');
                    script2.type = "text/javascript"
                    //script2.async = true;
                    script2.src = "//52.78.205.68:8000/location/kakaoNew.js";
                    document.body.appendChild(script2);
                })
            }
        }

    })
    function createMarkup(html) {
        return { __html: html };
    }
    return (
        <div s dangerouslySetInnerHTML={createMarkup(html)} />
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