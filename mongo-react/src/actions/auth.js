import api from '../api';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';

export const userLoggedIn = (user) => ({
		type: USER_LOGGED_IN,
		user
	})

export const userLoggedOut = () => ({
		type: USER_LOGGED_OUT
	})


export const login = credentials => dispatch => 
	api.user.login(credentials)
		.then(({user}) => {
			localStorage.fuckoffToken = user.token;
			return dispatch(userLoggedIn(user));
			});

export const logout = () => dispatch =>  {
		localStorage.removeItem('fuckoffToken')
		dispatch(userLoggedOut())
}

