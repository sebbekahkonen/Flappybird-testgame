<template>
	<div>
		<div>
			<h1>GAME OVER</h1>
		</div>		
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	computed: {
		...mapGetters('gameover', ['getGameover'])
	},
	created() {
		this.gameIsOver();
	},

	methods: {
		...mapActions('gameover', ['changeGameover']),

		gameIsOver() {
			this.changeStart(false);
			this.changeTopVal(300);
		}
	}
	
};
</script>
<style>
	
</style>