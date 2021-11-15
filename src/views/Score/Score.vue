<template>
	<div>
		<h1>SCORE: {{ getScore }}</h1>
		<h1>HIGHSCORE: {{ getHighScore }}</h1>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters('score', ['getScore']),
		...mapGetters('score', ['getHighScore'])
	},

	methods: {
		...mapActions('score', ['changeScore'])

	}
	
};
</script>
<style>
	
</style>