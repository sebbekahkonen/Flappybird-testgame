export default {
	namespaced: true,

	state: {
		score: null,
		highScore: null
	},
	mutations: {
		setScore(state, data) {
			state.score = data;
		},

		setHighScore(state, data) {
			state.highScore = data;
		}
	},
	actions: {
		changeScore({ commit }, data) {
			commit('setScore', data);
		},

		changeHighScore({ commit }, data) {
			commit('setHighScore', data);
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