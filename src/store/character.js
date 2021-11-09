export default {
	namespaced: true,

	state: {
		topValue: 45
	},
	mutations: {
		setTopValue(state, topValue) {
			// console.log(topValue);
			state.topValue = topValue;
		}
	},
	actions: {
		changeTopVal({ commit }, topValue) {
			const newTopValue = topValue;

			commit('setTopValue', newTopValue);
		}
	},
	getters: {
		getTopVal(state) {
			return state.topValue;
		}
	}
};