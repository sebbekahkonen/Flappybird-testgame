import api from '@/services/api';

export const login = (username, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'sebbe'
				&& password === 'test123') {
				resolve({
					id: 1234,
					username: 'sebbe',
					email: 'sebbetest@hotmail.com',
					phonenumber: 123456,
					token: '123asd'
				});

				return;
			}

			reject('Wrong username or password');

		}, 3000);

	});
};

export const register = (credentials) => {
	return api().post('register', credentials);
};
