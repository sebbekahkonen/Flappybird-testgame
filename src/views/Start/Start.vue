<template>
	<div class="startStopDiv">
		<v-btn @click="startGame">Start</v-btn>
		<v-btn @click="stopGame">Reset</v-btn>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	components:{
	},
	data: () => ({
		numVal: 0,
		interval: null
	}),

	computed:{
		...mapGetters('character', ['getTopVal']),
		...mapGetters('startgame', ['getStart']),
		...mapGetters('startgame', ['getKeydown'])
	},

	created() {
	},

	methods: {
		...mapActions('character', ['changeTopVal']),
		...mapActions('startgame', ['changeStart']),
		startGame() {
			this.interval = setInterval(() => {
				// console.log('stillgoing');
				// console.log(this.getKeydown);

				if(this.getKeydown === false) {
					// console.log('stillgoing');
					this.changeStart(true);
					// console.log(this.getStart);
					this.numVal =this.getTopVal;
					this.numVal++;
					this.changeTopVal(this.numVal);
				}
			}, 1);
		},

		stopGame() {
			this.changeStart(false);
			this.changeTopVal(300);
			clearInterval(this.interval);
		}
	}
	
};
</script>
<style scoped>
	.startStopDiv{
		color: green;
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
	}
</style>