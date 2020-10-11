
/********* initalState *************/
export default {
    connect: {
        serverOn: false,
        serverError: '',
        //internetOn: true
    },
    check: {
        home: {
            isOn: false,
            error: ''
        },
        kennel: {
            isOn: false,
            error: ''
        },
        location: {
            isOn: false,
        }
    },
    video: {
        home: {
            url: '',
            socket: null
        },
        kennel: {
            url: '',
            socket: null
        },
        talkOn : true,
        audioOn : true,
        vomit : 0
    },
	/* location: {
		isLoaded: false
	} */
    loading: true
}
