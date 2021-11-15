<template>
	<div class="startStopDiv">
		<v-btn @click="startGame">Start</v-btn>
		<v-btn @click="stopGame">Reset</v-btn>

		<GameField />
		<div><Gameover v-if="getGameover" /></div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import GameField from '../GameField/GameField.vue';
import Gameover from '../Gameover/Gameover.vue';
export default {
	components:{
		GameField,
		Gameover
	},
	data: () => ({
		numVal: 0,
		interval: null
	}),

	computed:{
		...mapGetters('character', ['getTopVal']),
		...mapGetters('startgame', ['getStart']),
		...mapGetters('startgame', ['getKeydown']),
		...mapGetters('gameover', ['getGameover']),
		...mapGetters('score', ['getScore']),
		...mapGetters('score', ['getHighScore'])
	},

	created() {
	},

	methods: {
		...mapActions('character', ['changeTopVal']),
		...mapActions('startgame', ['changeStart']),
		...mapActions('gameover', ['changeGameover']),
		...mapActions('score', ['changeScore']),
		...mapActions('score', ['changeHighScore']),

		startGame() {
			this.changeGameover(false);
			this.interval = setInterval(() => {
				if(this.getKeydown === false) {
					this.changeStart(true);
					this.numVal =this.getTopVal;
					this.numVal++;
					this.changeTopVal(this.numVal);
				}

				console.log(this.getGameover);

				if(this.getGameover === true) {
					this.stopGame();
				} 
			}, 1);
		},

		stopGame() {
			this.changeGameover(true);
			this.changeStart(false);
			this.changeTopVal(300);
			clearInterval(this.interval);
			console.log(this.getScore);

			if(this.getScore > this.getHighScore) {
				this.changeHighScore(this.getScore);
			}
		}
	}
	
};
</script>
<style scoped>
	.startStopDiv{
		width: 100%;
		height: 100%;
		top: 0%;
		left: 0%;
		position: absolute;
	}

	.startStopDiv button{
		width: 30%;
		background-color: grey;
		margin: 2% 10% 10% 10%;
		padding: 10px;
		text-align: center;
		margin-bottom: 0px;
	}
</style>