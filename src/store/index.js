import Vue from 'vue';
import Vuex from 'vuex';
import character from './character';
import startgame from './startgame';
import pipes from './pipes';
import score from './score';
import gameover from './gameover';
import user from './user';
import authentication from './authentication';
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
		authentication
	},
	plugins: [createPersistedState({
		key: 'user',
		paths: ['user']
	})]
});
