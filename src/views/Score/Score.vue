<template>
	<div>
		<h1>SCORE: {{ getScore }}</h1>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters('score', ['getScore'])
	},

	methods: {
		...mapActions('score', ['changeScore'])

	}
	
};
</script>
<style>
	
</style>