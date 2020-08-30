export * from './connectAction';
export * from './checkAction';
export * from './videoAction';
export * from './locationAction';
export * from './webosAction';
/*
메인 화면 로딩 끄고 키기 
Main/Loading 이랑 연결됨
*/
export const LOADING_SET = 'LOADING/SET'
export const setLoading = (loading) => {
	return {
		type: LOADING_SET,
		loading
	}
}
