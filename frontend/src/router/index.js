import Vue from 'vue';
import VueRouter from 'vue-router';
import character from '@/views/Character/routes';
import start from '@/views/Start/routes';
import profile from '@/views/Profile/routes';
import login from '@/views/Login/routes';
import exit from '@/views/Exit/routes';
import register from '@/views/Register/routes';
import gamefield from '@/views/GameField/routes';

Vue.use(VueRouter);

const routes = [
	...character,
	...start,
	...profile,
	...login,
	...exit,
	...gamefield,
	...register
];
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
