export default {
	namespaced: true,

	state: {
		score: null,
		highScore: null
	},
	mutations: {
		setScore(state, score) {
			state.score = score;
		},

		setHighScore(state, highScore) {
			state.highScore = highScore;
		}
	},
	actions: {
		changeScore({ commit }, score) {
			const newScore = score;

			commit('setScore', newScore);
		},

		changeHighScore({ commit }, highScore) {
			const newScore = highScore;

			commit('setHighScore', newScore);
		}
	},
	getters: {
		getScore(state) {
			return state.score;
		},

		getHighScore(state) {
			return state.highScore;
		}
	}
};