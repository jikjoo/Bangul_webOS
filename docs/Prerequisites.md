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
- http://build.webos-ports.org/webosose/qemux86/   에서  
> webos-image-qemux86-master-20200724162342.wic.v..> 24-Jul-2020 22:08           398518999

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
vboxmanage modifyvm webos-image --audio dsound --audioout on --audioin on
vboxmanage modifyvm webos-image --nic1 nat --nictype1 82540EM --natpf1 ssh,tcp,,6622,,22
vboxmanage modifyvm webos-image --natpf1 web-inspector,tcp,,9998,,9998
vboxmanage modifyvm webos-image --mouse usbtablet
vboxmanage modifyvm webos-image --uart1 0x3f8 4 --uartmode1 file null
vboxmanage modifyvm webos-image --audio dsound --audioout on --audioin on
vboxmanage storagectl webos-image --add ide --name webos-image

# 모니터가 1024*600보다 작을 때
#vboxmanage setextradata webos-image GUI/ScaleFactor 1.2

# vboxmanage storageattach webos-image --storagectl webos-image --type hdd --port 0 --device 0 --medium </path/to/image/webos-image-qemux86-master-**.wic.vmdk>

vboxmanage storageattach webos-image --storagectl webos-image --type hdd --port 0 --device 0 --medium "C:\Users\Jikjoo\Documents\webos-image\webos-image-qemux86-master-20200724162342.wic.vmdk"
```
- 모니터 해상도 설정
```
ares-shell -d emulator

config="{\"com.webos.surfacemanager.compositorGeometry\":\"1024x600+0+0r0s1\",\"com.webos.surfacemanager.displayConfig\":[{\"device\":\"/dev/dri/card0\",\"hwcursor\":false,\"outputs\":[{\"name\":\"HDMI1\",\"geometry\":\"1024x600+0+0r0s1\",\"mode\":\"1024x600\"}]}]}"; luna-send -n 1 -f luna://com.webos.service.config/setConfigs "{\"configs\":$config}"

# 확인용
luna-send -n 1 -f luna://com.webos.service.config/getConfigs '{"configNames":["com.webos.surfacemanager.*"]}'
```
- 실행 
```
vboxmanage startvm webos-image
```
- webos-image 설정 -> USB -> USB 3.0 추가 (안되면 VirtualBox Extension pack 설치) -> ~모든 리스트 추가~
- SSH 연결
```
ssh -p 6622 -o StrictHostKeyChecking=no -o UserKnownHostsFile=null root@localhost
```


# webOS 장비 설정
https://www.webosose.org/docs/guides/setup/system-requirements/  
### 지급된 장비
- Rasberry pi 4
- SD card with webOS image
- C-type Adapter
- HDMI cable
- Small Case

1. 디스플레이 5v-touch랑 라즈베리파이 USB랑 연결(usb 옛날 케이블)
1. 디스플레이 HDMI랑 라즈베리파이 왼쪽 small hdmi 랑 연결(short HDMI 케이블)
1. 라즈베리파이 랜선이랑 노트북 랜선 연결
1. 디스플레이 5v in에 전원 연결(usb 옛날 케이블)
1. 라즈베리파이 전원 연결(ctype 케이블)

# webOS 2.6 image build
https://www.webosose.org/docs/guides/setup/building-webos-ose/
- http://build.webos-ports.org/webosose/raspberrypi4/   에서  
> webos-image-raspberrypi4-master-20200724135247...> 24-Jul-2020 16:16           378142380

다운로드, 압축풀기

# Flashing the image
- https://sourceforge.net/projects/win32diskimager/ 다운로드
- Image File에 webos-image~.wic 부르고, SD 카드에 Write하기

# IP 고정
```
ares-shell -d webos
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setipv4 '{
     "method": "manual",
     "address": "169.254.203.77",
     "netmask": "255.255.0.0",
     "gateway": "169.254.1.1"
}'
```

# 화면 비율 조정
```
ares-shell -d webos
config="[{\"device\":\"/dev/dri/card0\",\"hwcursor\":false,\"outputs\":[{\"name\":\"HDMI1\",\"geometry\":\"1024x600+0+0r0s1\",\"mode\":\"1024x600\"}]}]"; luna-send -n 1 -f luna://com.webos.service.config/setConfigs "{\"configs\":{\"com.webos.surfacemanager.displayConfig\": $config}}"
```