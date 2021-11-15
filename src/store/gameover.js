export default {
	namespaced: true,

	state: {
		gameOver: false
	},
	mutations: {
		setGameover(state, gameOver) {
			state.gameOver = gameOver;
		}
	},
	actions: {
		changeGameover({ commit }, gameOver) {
			const newGameoverValue = gameOver;

			commit('setGameover', newGameoverValue);
		}
	},
	getters: {
		getGameover(state) {
			return state.gameOver;
		}
	}
};