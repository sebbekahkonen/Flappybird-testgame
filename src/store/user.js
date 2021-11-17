import services from '@/services';
import router from '@/router';


const initialState = () => ({
	id: null,
	username: '',
	email: '',
	phonenumber: null,
	token: ''
});
const initialStateNewUser = () => ({
	id: null,
	username: '',
	email: '',
	password: '',
	token: ''
});

export default {
	namespaced: true,

	state: {
		user: initialState(),
		newUser: initialStateNewUser()
	},
	mutations: {
		setUser(state, data) {
			state.user = data;
		},

		setNewUser(state, data) {
			state.newUser = data;
		}
	},
	actions: {
		async login({ commit }, data) {
			const userData = await services.user.login(data.username, data.password);

			commit('setUser', userData);
		},

		addUser({ commit }, data) {
			commit('setNewUser', data);
		},

		logout({ commit }) {
			commit('setUser', initialState());
			router.push('/login');
		}
	},
	getters: {
		getUser(state) {
			return state.user;
		},

		getNewUser(state) {
			return state.newUser;
		}
	}
};