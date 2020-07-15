# EnactSample
## enact 설치
- `npm install -g @enact/cli`
- `git clone https://github.com/enactjs/samples`
- `cd samples`
- `npm install`
- `cd enact-all-samples`
- `npm install`
- `npm run serve` 하면 웹 서버로 실행됨
- `npm run pack`
- dist 폴더 생성됐는지 확인
- `ares-package dist`
- com.enactjs.app.enactqa_1.0.0_all.ipk 파일 생성확인
- 에뮬레이터/webOS 장비 실행
- `ares-install -d emulator com.enactjs.app.enactqa_1.0.0_all.ipk`    
> 안되면 `ares-setup-device -s`로 장비 확인   
  장비 없으면 `ares-setup-device --add`로 장비 추가
  - 에뮬레이터 들어가서 확인
