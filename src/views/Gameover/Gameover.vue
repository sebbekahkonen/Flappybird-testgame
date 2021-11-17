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
			console.log('called');
			this.changeGameover(true);
		}
	}
	
};
</script>
<style scoped>

div {
	width: 100%;
	height: 50%;
	position: absolute;
	top: 25%;
	left: 0%;
	font-size: 40px;
	text-align: center;
}
	
</style>