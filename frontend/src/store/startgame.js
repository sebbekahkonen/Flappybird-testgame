export default {
	namespaced: true,

	state: {
		start: false,
		keydown: false
	},
	mutations: {
		setStart(state, data) {
			state.start = data;
		},

		setKeydown(state, data) {
			state.keydown = data;
		}
	},
	actions: {
		changeStart({ commit }, data) {
			commit('setStart', data);
		},

		changeKeydown({ commit }, data) {
			commit('setKeydown', data);
		}

	},
	getters: {
		getStart(state) {
			return state.start;
		},

		getKeydown(state) {
			return state.keydown;
		}
	}
};