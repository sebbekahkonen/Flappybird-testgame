const characterPosition = () => ({
	characterX: null,
	characterY: null
});

export default {
	namespaced: true,

	state: {
		topValue: 300,
		position: characterPosition()
	},
	mutations: {
		setTopValue(state, data) {
			state.topValue = data;
		},

		setPosition(state, data) {
			state.position = data;
		}
	},
	actions: {
		changeTopVal({ commit }, data) {
			commit('setTopValue', data);
		},

		changePosition({ commit }, data) {
			commit('setPosition', data);
		}
	},
	getters: {
		getTopVal(state) {
			return state.topValue;
		},

		getPosition(state) {
			return state.position;
		}
	}
};