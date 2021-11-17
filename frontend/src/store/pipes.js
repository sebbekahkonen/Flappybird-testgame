const firstSet = () => ({
	y: null,
	bottomPipeX: null,
	topPipeX: null
});
const secondSet = () => ({
	y: null,
	bottomPipeX: null,
	topPipeX: null
});
const thirdSet = () => ({
	y: null,
	bottomPipeX: null,
	topPipeX: null
});
const fourthSet = () => ({
	y: null,
	bottomPipeX: null,
	topPipeX: null
});
const fifthSet = () => ({
	y: null,
	bottomPipeX: null,
	topPipeX: null
});

export default {
	namespaced: true,


	state: {
		firstPipes: firstSet(),
		secondPipes: secondSet(),
		thirdPipes: thirdSet(),
		fourthPipes: fourthSet(),
		fifthPipes: fifthSet()
	},
	mutations: {
		setFirstSet(state, data) {
			state.firstPipes = data;
		},
		setSecondSet(state, data) {
			state.secondPipes = data;
		},
		setThirdSet(state, data) {
			state.thirdPipes = data;
		},
		setFourthSet(state, data) {
			state.fourthPipes = data;
		},
		setFifthSet(state, data) {
			state.fifthPipes = data;
		}
	},
	actions: {
		changeFirstSet({ commit }, data) {
			commit('setFirstSet', data);
		},
		changeSecondSet({ commit }, data) {
			commit('setSecondSet', data);
		},
		changeThirdSet({ commit }, data) {
			commit('setThirdSet', data);
		},
		changeFourthSet({ commit }, data) {
			commit('setFourthSet', data);
		},
		changeFifthSet({ commit }, data) {
			commit('setFifthSet', data);
		}
	},
	getters: {
		getFirstSet(state) {
			return state.firstPipes;
		},

		getSecondSet(state) {
			return state.secondPipes;
		},

		getThirdSet(state) {
			return state.thirdPipes;
		},

		getFourthSet(state) {
			return state.fourthPipes;
		},

		getFifthSet(state) {
			return state.fifthPipes;
		}
	}
};