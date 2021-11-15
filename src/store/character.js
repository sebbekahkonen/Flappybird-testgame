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
		setTopValue(state, topValue) {
			state.topValue = topValue;
		},

		setPosition(state, data) {
			state.position.characterX = data[0];
			state.position.characterY = data[1];

		}
	},
	actions: {
		changeTopVal({ commit }, topValue) {
			const newTopValue = topValue;

			commit('setTopValue', newTopValue);
		},

		changePosition({ commit }, data) {
			const newPosition = [data.x, data.y];

			commit('setPosition', newPosition);
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