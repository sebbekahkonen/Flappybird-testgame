export default {
	namespaced: true,

	state: {
		authenticated: false
	},
	mutations: {
		setAuth(state, authenticated) {
			state.authenticated = authenticated;
		}
	},
	actions: {
		changeAuthentication({ commit }, authenticated) {
			const newAuthentication = authenticated;

			commit('setAuth', newAuthentication);
		}
	},
	getters: {
		getAuthentication(state) {
			return state.authenticated;
		}
	}
};