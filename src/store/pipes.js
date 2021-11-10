const firstSet = () => ({
	y: null,
	bottomX: null,
	topBottom: null
});
const secondSet = () => ({
	y: null,
	bottomX: null,
	topBottom: null
});
const thirdSet = () => ({
	y: null,
	bottomX: null,
	topBottom: null
});
const fourthSet = () => ({
	y: null,
	bottomX: null,
	topBottom: null
});
const fifthSet = () => ({
	y: null,
	bottomX: null,
	topBottom: null
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
			state.firstPipes.bottomX = data[1];
			state.firstPipes.topBottom = data[2];
		},
		setSecondSet(state, data) {
			state.secondPipes.y = data[0];
			state.secondPipes.bottomX = data[1];
			state.secondPipes.topBottom = data[2];
		},
		setThirdSet(state, data) {
			state.thirdPipes.y = data[0];
			state.thirdPipes.bottomX = data[1];
			state.thirdPipes.topBottom = data[2];
		},
		setFourthSet(state, data) {
			state.fourthPipes.y = data[0];
			state.fourthPipes.bottomX = data[1];
			state.fourthPipes.topBottom = data[2];
		},
		setFifthSet(state, data) {
			state.fifthPipes.y = data[0];
			state.fifthPipes.bottomX = data[1];
			state.fifthPipes.topBottom = data[2];
		}
	},
	actions: {
		changeFirstSet({ commit }, data) {
			const newFirstSet = [data.y, data.bottomX, data.topBottom];

			commit('setFirstSet', newFirstSet);
		},
		changeSecondSet({ commit }, data) {
			const newSecondSet = [data.y, data.bottomX, data.topBottom];

			commit('setSecondSet', newSecondSet);
		},
		changeThirdSet({ commit }, data) {
			const newThirdSet = [data.y, data.bottomX, data.topBottom];

			commit('setThirdSet', newThirdSet);
		},
		changeFourthSet({ commit }, data) {
			const newFourthSet = [data.y, data.bottomX, data.topBottom];

			commit('setFourthSet', newFourthSet);
		},
		changeFifthSet({ commit }, data) {
			const newFifthSet = [data.y, data.bottomX, data.topBottom];

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
			return state.ThirdPipes;
		},

		getFourthSet(state) {
			return state.FourthPipes;
		},

		getFifthSet(state) {
			return state.FifthPipes;
		}
	}
};