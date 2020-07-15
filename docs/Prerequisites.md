# install git
- https://git-scm.com/
- 재부팅 후 `git` 명령어 확인

# install Node.js
- 12.18 버전 설치 https://nodejs.org/en/
- 재부팅 후 `node -v` 명령어 확인

# install CLI
 https://www.webosose.org/docs/tools/sdk/cli/cli-user-guide
- 다운로드 https://www.webosose.org/docs/tools/sdk/sdk-download/#command-line-interface
- 압축 풀기
- ares-cli 폴더 root Directory ( C:\ or / )로 이동
- cmd 관리자권한으로 실행
- `setx /m PATH "C:\ares-cli\bin;%PATH%"`
- `setx PATH "C:\ares-cli\bin;%PATH%"`
- Linux에선 home/.profile 파일에 
```
# add CLI path
if [ -d "$HOME/ares-cli/bin" ]; then
  export PATH="$PATH:$HOME/ares-cli/bin"
fi
``` 
추가, `source ~/.profile` 실행
- 재부팅 후 `ares` 명령어 실행해보기


# webOS image build
https://www.webosose.org/docs/guides/setup/building-webos-ose/
- http://build.webos-ports.org/webosose/qemux86/에서  
> webos-image-devel-qemux86-master-20200528044350..> 28-May-2020 05:56           865831296   
> webos-image-qemux86-master-20200528044350.wic.v..> 28-May-2020 05:53           388744762   

다운로드, 압축풀기

# webOS emulator
 https://www.webosose.org/docs/tools/sdk/emulator/virtualbox-emulator/emulator-user-guide/
- [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads)에서 'VirtualBox 6.1.12 platform packages'랑 'VirtualBox 6.1.12 Oracle VM VirtualBox Extension Pack' 다운로드
- cmd 관리자권한으로 실행
- `setx /m PATH "C:\Program Files\Oracle\VirtualBox;%PATH%"`
- `setx PATH "C:\Program Files\Oracle\VirtualBox;%PATH%"`
- cmd 켜서 밑의 명령어 실행
```shell
vboxmanage createvm --ostype Linux --register --name webos-image
vboxmanage modifyvm webos-image --memory 2048 --vram 128 --ioapic on --cpus 2
vboxmanage modifyvm webos-image --graphicscontroller vmsvga
vboxmanage modifyvm webos-image --accelerate3d on
vboxmanage modifyvm webos-image --audio pulse --audioout on --audioin on
vboxmanage modifyvm webos-image --nic1 nat --nictype1 82540EM --natpf1 ssh,tcp,,6622,,22
vboxmanage modifyvm webos-image --natpf1 web-inspector,tcp,,9998,,9998
vboxmanage modifyvm webos-image --mouse usbtablet
vboxmanage modifyvm webos-image --uart1 0x3f8 4 --uartmode1 file null
vboxmanage modifyvm webos-image --audio dsound --audioout on --audioin on
vboxmanage storagectl webos-image --add ide --name webos-image

# vboxmanage storageattach webos-image --storagectl webos-image --type hdd --port 0 --device 0 --medium </path/to/image/webos-image-qemux86-master-**.wic.vmdk>
vboxmanage storageattach webos-image --storagectl webos-image --type hdd --port 0 --device 0 --medium "C:\Users\Jikjoo\Downloads\webos-image-qemux86-master-20200528044350.wic.vmdk\webos-image-qemux86-master-20200528044350.wic.vmdk"
```
- 실행 `vboxmanage startvm webos-image`
- webos-image 설정 -> USB -> USB 3.0 추가 (안되면 VirtualBox Extension pack 설치) -> 모든 리스트 추가
- SSH 연결
`ssh -p 6622 -o StrictHostKeyChecking=no -o UserKnownHostsFile=null root@localhost`


# ~webOS 장비 설정~
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
