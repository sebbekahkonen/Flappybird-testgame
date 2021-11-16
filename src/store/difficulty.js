const initialState = () => ({
	normal: false,
	medium: false,
	hard: false,
	expert: false
});

export default {
	namespaced: true,

	state: {
		difficulty: initialState()
	},
	mutations: {
		setDifficulty(state, data) {
			state.difficulty = data;
		}
	},
	actions: {
		changeDifficulty({ commit }, data) {
			commit('setDifficulty', data);
		}
	},
	getters: {
		getDifficulty(state) {
			return state.difficulty;
		}
	}
};