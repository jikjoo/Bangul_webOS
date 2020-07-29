# Redux state 흐름
### 예시) 서버 연결
1. BtnConnect component에서 onConnect를 실행한다.
2. onConnect는 sendConnect Action과 연결되어있고, isOn, error 는 connect의 state와 연결되어있다.
3. sendConnect Action은 actions에 정의되어 있다. axios를 통해 HTTP get을 실행한다.
4. 비동기 처리를 위해 connectServer action에 axios에서 받은 값을 넣어 실행(dispatch)한다.
5. connectServer action은 CONNECT_SERVER라는 신호를 reducer한테 보내게 되고, 신호를 받은 reducer는 connect 함수에서 상태를 바꾼다.
6. 바뀐 상태는 BtnConnect에 isOn, error를 통해 나타나게 된다.

### Action 만들기
1. Action을 만드는 이유는 다른 component와 공유되는 상태 관리, 반복되는 함수, 외부 연결 등의 이유가 있다.
1. component에서 바꾸고자 할 상태와 행동을 정한다. 
