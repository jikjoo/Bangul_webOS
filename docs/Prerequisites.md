# install CLI
- https://www.webosose.org/docs/tools/sdk/cli/cli-user-guide
- 다운로드 https://www.webosose.org/docs/tools/sdk/sdk-download/#command-line-interface
- 압축 풀기
- ares-cli 폴더 root Directory ( C:\ or / )로 이동
- cmd 관리자권한으로 실행
- `setx /m PATH "C:\ares-cli\bin;%PATH%"` , `setx PATH "C:\ares-cli\bin;%PATH%"`
- Linux에선 home/.profile 파일에 
```
# add CLI path
if [ -d "$HOME/ares-cli/bin" ]; then
  export PATH="$PATH:$HOME/ares-cli/bin"
fi
``` 
추가, `source ~/.profile` 실행
- 재부팅 후 `ares` 명령어 실행해보기

# webOS emulator
- https://www.webosose.org/docs/tools/sdk/emulator/virtualbox-emulator/emulator-user-guide/

# ~webOS build~
https://www.webosose.org/docs/guides/setup/system-requirements/  
### 지급된 장비
- Rasberry pi 4
- SD card with webOS image
- C-type Adapter
- HDMI cable
- Small Case

현재 디스플레이가 없어서 라즈베리파이를 출력을 못함.   
노트북으로는 라즈베리파이와 HDMI와 연결할 수 없음.   
노트북으로 라즈베리파이와 연결하기 위해선 랜선을 통한 SSH 연결이 필요. [참고](https://blog.naver.com/PostView.nhn?blogId=icbanq&logNo=221320624608&redirect=Dlog&widgetTypeCall=true&directAccess=false)

