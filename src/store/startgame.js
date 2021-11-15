export default {
	namespaced: true,

	state: {
		start: false,
		keydown: false
	},
	mutations: {
		setStart(state, start) {
			state.start = start;
		},

		setKeydown(state, keydown) {
			state.keydown = keydown;
		}
	},
	actions: {
		changeStart({ commit }, start) {
			const newStartValue = start;

			commit('setStart', newStartValue);
		},

		changeKeydown({ commit }, keydown) {
			const newKeydownValue = keydown;

			commit('setKeydown', newKeydownValue);
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