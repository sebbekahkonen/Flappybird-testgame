import Vue from 'vue';
import Vuex from 'vuex';
import character from './character';
import startgame from './startgame';
import pipes from './pipes';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		character,
		startgame,
		pipes
	}
});
