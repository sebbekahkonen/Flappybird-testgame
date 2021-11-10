export default {
	namespaced: true,

	state: {
		start: false
	},
	mutations: {
		setStart(state, start) {
			state.start = start;
		}
	},
	actions: {
		changeStart({ commit }, start) {
			const newStartValue = start;

			commit('setStart', newStartValue);
		}
	},
	getters: {
		getStart(state) {
			return state.start;
		}
	}
};