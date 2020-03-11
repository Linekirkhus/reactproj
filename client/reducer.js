//import * as actions from './actions';

const initial_state = {
	email: '',
	passWord: '',
	errorMessage: null,
	isRegistering: false
};

export default function reducer(state = initial_state, action = {}) {
	switch (action.type) {
		case 'UPDATE_LOGIN': {
			const { email, passWord } = action.data;
			return { ...state, email, passWord };
		}
		case 'LOGIN_ERROR': {
			const errorMessage = action.errorMessage;
			return { ...state, errorMessage };
		}
			case 'SWITCH_FORMS': {
			const isRegistering = action.isRegistering;
			return { ...state, isRegistering };
		}

		default:
			break;
	}
	return state;
}

/*
case 'FETCH_HELLO_SUCCESS':
	console.log('The server says:', action.message);
	break;
case 'REPORT_FAILURE':
	console.error('Failure in ' + action.what + ':');
	console.error(action.error);
	break;
*/
