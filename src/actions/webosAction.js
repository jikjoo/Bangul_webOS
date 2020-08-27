import LS2Request from '@enact/webos/LS2Request';
import text from '../../resources/text.json';
import path from 'path';

export const webosOn = typeof window.PalmSystem !== 'undefined'
export const LS2 = new LS2Request();
/* 
type
  server_not_connected : connectAction/sendConnectServer 후 서버와 연결이 안됐을 때
  internet_not_connected : App.js에서 online 체크 후 인터넷 연결이 안 됐을 때
  mic_not_found : Video/MicNotFound에서 notFound일 때
  vomit_on : Kennel/VomitCheck에서 vomitOn일 때
*/

export const createToast = (type) => (dispatch) => {
    dispatch({ type: `WEBOS/CREATE_TOAST/${type}` });
    console.log(`dispatch createToast/${type}`)
    LS2.send({
        service: 'luna://com.webos.notification',
        method: 'createToast',
        parameters: {
            "sourceId": "com.bangul.app.webos",
            "message": `${text.title}: ${text[type]}`,
            "persistent": true,
            "iconUrl": "/media/developer/apps/usr/palm/applications/com.bangul.app.webos/icon.png" 
            // 아이콘 적용 안되는 이슈 #36
        },
        onComplete: (res) => {
            console.log({ createToast: res })
        },
    })
}
