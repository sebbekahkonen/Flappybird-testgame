export default {
	namespaced: true,

	state: {
		gameOver: false
	},
	mutations: {
		setGameover(state, data) {
			state.gameOver = data;
		}
	},
	actions: {
		changeGameover({ commit }, data) {
			commit('setGameover', data);
		}
	},
	getters: {
		getGameover(state) {
			return state.gameOver;
		}
	}
};