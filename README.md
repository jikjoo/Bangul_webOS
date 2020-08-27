# Bangul_webOS
"차량용 스마트 펫케어 서비스 : 방울이가타고있어요"의 차량용 소프트웨어입니다
- [Contribute Rule](/docs/Rule.md)
- [Prerequisites](/docs/Prerequisites.md)
- [EnactSample](/docs/EnactSample.md)
- [EnactJS](/docs/enactjs.md)
## 관련 Repository
- 서버 : https://github.com/Galocg/Bangul_Smart
- 스마트기기 : https://github.com/Chaeoon-Park/Bangul_server-github-
- 머신러닝 : https://github.com/Adam-Kim/dogvomitML
- 디자인 :https://github.com/jikjoo/moonstone
- webRTC : https://github.com/jikjoo/react-webrtc
- 추천알고리즘 : https://github.com/Adam-Kim/Bangul_Recommend

## 설치
- `git clone https://github.com/jikjoo/Bangul_webOS`
- `npm install -g @enact/cli@2.8.1`
- `npm install`
- `.env` 파일 생성 후, 구글 드라이브에서 복사

## 로컬 서버 실행
- `npm run serve`
- http://localhost:8080 접속

## 로컬 서버 디버깅
- ctrl+shift+i 눌르고 console 확인

## webOS 에뮬레이터에서 실행 : npm run install-emul
```s
# 에뮬레이터 실행   
vboxmanage startvm webos-image
# dist 생성   
npm run pack
npm run pack-p (완성모드)
# ipk 파일 생성   
ares-package dist
# app 설치   
ares-install com.bangul.app.webos_1.0.0_all.ipk -d emulator 
# app 실행   
ares-launch com.bangul.app.webos -d emulator
```
## webOS 디버깅
```
ares-inspect com.bangul.app.webos -d emulator
```

## webOS 장치 연결
- `ares-setup-device`
- add 선택
- 장치 ip 입력(network 설정에서 확인 가능), 이름은 webos로

## webOS 장치에서 실행 : npm run install
```s
# dist 생성   
npm run pack    
# ipk 파일 생성   
ares-package dist
# app 설치   
ares-install com.bangul.app.webos_1.0.0_all.ipk -d webos
# app 실행   
ares-launch com.bangul.app.webos -d webos
# debugging
ares-inspect com.bangul.app.webos -d webos
```