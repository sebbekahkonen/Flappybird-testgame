export default {
	namespaced: true,

	state: {
		score: null
	},
	mutations: {
		setScore(state, score) {
			state.score = score;
		}
	},
	actions: {
		changeScore({ commit }, score) {
			const newScore = score;

			commit('setScore', newScore);
		}
	},
	getters: {
		getScore(state) {
			return state.score;
		}
	}
};