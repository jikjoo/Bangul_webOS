# 준비 과정
- [Prerequisites#AI.VOICE 설정하기](Prerequisites.md#AI.VOICE-설정하기)

# 개념
https://developers.google.com/assistant/conversational/overview
```
User -> "방울아 켄넬 화면 보여줘" -> googleAssistant -> request to Dialog($KennelVideo) -> DialogFlow   
                                                                                 JSON <- 
```

### Action
- https://developers.google.com/assistant/conversational/actions
- 대화의 진입점(invocation)을 정의하는 객체
- Invocation : 유저가 assistant한테 어떤 Action을 사용할지 정하는거
- Conversation(대화) : Action이 정해진 후에(invoked), 유저랑 Action이랑 상호작용을 정의 (Intent, type, scene, prompt을 포함)
- Fulfillment : web hook을 통해서 Action과 통신하는 웹서비스

![action](https://developers.google.com/assistant/conversational/images/actions.svg)

### Intent
- Action을 받은 Assistant 해야할 일을 나타냄
![intent](https://developers.google.com/assistant/conversational/images/scene-overview.svg)

### Scene
- Intent들의 조합

### Prompt
- Action이 유저한테 응답할 때 형태랑 계속할지를 정의


### Dialogflow
- Custom Action 만들기
- https://dialogflow.cloud.google.com/
- Intents : 행동들의 묶음
- Contexts : 변수 저장
- Events : Optional way to trigger intent ex) Welcome
- Training Phrases : 사용자가 말하는 입력. Intent 실행시키는 법
- Actions and parameters : 어떤 행동 했는지 ex) input.welcome
- Responses : 사용자에게 주는 응답. ex) 안녕하세요 직주씨!

예시)
Intents : 테스팅
Training Pharses : ["테스트", "테스팅"]
Actions : input.testing
Responses : ["테스팅 중입니다.", "테스트 하고 있어요"]