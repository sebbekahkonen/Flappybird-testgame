import api from '@/services/api';

export default {
	register(credentials) {
		return api().post('register', credentials);
	}
};

// AuthenticationService.register({
// 	email: 'testing@hotmail.com',
// 	password: '12345'
// })