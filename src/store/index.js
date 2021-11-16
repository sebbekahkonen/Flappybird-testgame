import Vue from 'vue';
import Vuex from 'vuex';
import character from './character';
import startgame from './startgame';
import pipes from './pipes';
import score from './score';
import gameover from './gameover';
import user from './user';
import authentication from './authentication';
import difficulty from './difficulty';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		character,
		startgame,
		pipes,
		score,
		gameover,
		user,
		authentication,
		difficulty
	},
	plugins: [createPersistedState({
		key: 'user',
		paths: ['user']
	})]
});
