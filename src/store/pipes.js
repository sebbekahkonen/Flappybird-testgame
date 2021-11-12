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
	//topBottom
	//bottomX
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
			state.firstPipes.y = data[0];
			state.firstPipes.bottomPipeX = data[1];
			state.firstPipes.topPipeX = data[2];
		},
		setSecondSet(state, data) {
			state.secondPipes.y = data[0];
			state.secondPipes.bottomPipeX = data[1];
			state.secondPipes.topPipeX = data[2];
		},
		setThirdSet(state, data) {
			state.thirdPipes.y = data[0];
			state.thirdPipes.bottomPipeX = data[1];
			state.thirdPipes.topPipeX = data[2];
		},
		setFourthSet(state, data) {
			state.fourthPipes.y = data[0];
			state.fourthPipes.bottomPipeX = data[1];
			state.fourthPipes.topPipeX = data[2];
		},
		setFifthSet(state, data) {
			state.fifthPipes.y = data[0];
			state.fifthPipes.bottomPipeX = data[1];
			state.fifthPipes.topPipeX = data[2];
		}
	},
	actions: {
		changeFirstSet({ commit }, data) {
			const newFirstSet = [data.y, data.bottomPipeX, data.topPipeX];

			commit('setFirstSet', newFirstSet);
		},
		changeSecondSet({ commit }, data) {
			const newSecondSet = [data.y, data.bottomPipeX, data.topPipeX];

			commit('setSecondSet', newSecondSet);
		},
		changeThirdSet({ commit }, data) {
			const newThirdSet = [data.y, data.bottomPipeX, data.topPipeX];

			commit('setThirdSet', newThirdSet);
		},
		changeFourthSet({ commit }, data) {
			const newFourthSet = [data.y, data.bottomPipeX, data.topPipeX];

			commit('setFourthSet', newFourthSet);
		},
		changeFifthSet({ commit }, data) {
			const newFifthSet = [data.y, data.bottomPipeX, data.topPipeX];

			commit('setFifthSet', newFifthSet);
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