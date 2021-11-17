export default {
	namespaced: true,

	state: {
		authenticated: false
	},
	mutations: {
		setAuth(state, data) {
			state.authenticated = data;
		}
	},
	actions: {
		changeAuthentication({ commit }, data) {
			commit('setAuth', data);
		}
	},
	getters: {
		getAuthentication(state) {
			return state.authenticated;
		}
	}
};