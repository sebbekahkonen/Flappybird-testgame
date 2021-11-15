<template>
	<div ref="character" class="gameCharacter" :style="{top: `${getTopVal}px`}">
		<Keypress key-event="keydown"
			:key-code="13" 
			@success="jump"
		/>
		<Keypress key-event="keyup"
			:key-code="13" 
			@success="stopJump"
		/>

		<Gameover v-if="getGameover" />
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Gameover from '../Gameover/Gameover.vue';
export default {
	components:{
		Keypress: () => import('vue-keypress'),
		Gameover
	},

	data: () =>({
		position: {
			x: null,
			y: null
		},
		interval: null,
		jumpInterval: null
	}),

	computed:{
		...mapGetters('character', ['getTopVal']),
		...mapGetters('character', ['getPosition']),
		...mapGetters('startgame', ['getStart']),
		...mapGetters('pipes', ['getFirstSet']),
		...mapGetters('pipes', ['getSecondSet']),
		...mapGetters('pipes', ['getThirdSet']),
		...mapGetters('pipes', ['getFourthSet']),
		...mapGetters('pipes', ['getFifthSet']),
		...mapGetters('score', ['getScore']),
		...mapGetters('startgame', ['getKeydown']),
		...mapGetters('gameover', ['getGameover'])
	},

	created() {
		this.characterCollision();
	},

	methods:{
		...mapActions('character', ['changeTopVal']),
		...mapActions('character', ['changePosition']),
		...mapActions('startgame', ['changeStart']),
		...mapActions('score', ['changeScore']),
		...mapActions('startgame', ['changeKeydown']),
		...mapActions('gameover', ['changeGameover']),

		startTheGame() {
			this.changeStart(true);
		},

		stopTheGame() {
			this.changeStart(false);
		},

		characterCollision() {
			this.interval = setInterval(() => {
				if(this.getStart === true) {
					this.position.x = Math.round(this.$refs.character.getBoundingClientRect().top);
					this.position.y = Math.round(this.$refs.character.getBoundingClientRect().left);
					this.changePosition(this.position);
					/* Character position rounded nearest 50 */
					let characterX = Math.round(this.getPosition.characterX / 30) * 30;
					let characterY = Math.round(this.getPosition.characterY / 50) * 50;
					/* First set position rounded to nearest 50 */
					let firstSetBottomX = Math.round(this.getFirstSet.bottomPipeX / 30) * 30;
					let firstSetTopX =	Math.round(this.getFirstSet.topPipeX / 30) * 30;
					let firstSetY = Math.round(this.getFirstSet.y / 50) * 50;

					// console.log(this.getPosition.characterY);
					//78
					// console.log('count is 0');
					this.changeScore(this.getScore + 10);

					if(characterX >= firstSetBottomX && characterY === firstSetY
				||
				characterX <= firstSetTopX && characterY === firstSetY) {
						// console.log('********GOT HIT FIRST********');
						this.changeGameover(true);
					}

					/*	Second set position rounded to nearest 50 */
					let secondSetBottomX = Math.round(this.getSecondSet.bottomPipeX / 30) * 30;
					let secondSetTopX =	Math.round(this.getSecondSet.topPipeX / 30) * 30;
					let secondSetY = Math.round(this.getSecondSet.y / 50) * 50;

					if(characterX >= secondSetBottomX && characterY === secondSetY
				||
				characterX <= secondSetTopX && characterY === secondSetY) {
						// console.log('********GOT HIT SECOND********');
						alert('got hit second');
					}

					/*	Third set position rounded to nearest 50 */
					let thirdSetBottomX = Math.round(this.getThirdSet.bottomPipeX / 30) * 30;
					let thirdSetTopX =	Math.round(this.getThirdSet.topPipeX / 30) * 30;
					let thirdSetY = Math.round(this.getThirdSet.y / 50) * 50;

					if(characterX >= thirdSetBottomX && characterY === thirdSetY
				||
				characterX <= thirdSetTopX && characterY === thirdSetY) {
						// console.log('********GOT HIT THIRD********');
						alert('got hit third');
					}

					/*	Fourth set position rounded to nearest 50 */
					let fourthSetBottomX = Math.round(this.getFourthSet.bottomPipeX / 30) * 30;
					let fourthSetTopX =	Math.round(this.getFourthSet.topPipeX / 30) * 30;
					let fourthSetY = Math.round(this.getFourthSet.y / 50) * 50;

					if(characterX >= fourthSetBottomX && characterY === fourthSetY
				||
				characterX <= fourthSetTopX && characterY === fourthSetY) {
						// console.log('********GOT HIT FOURTH********');
						alert('got hit fourth');
					}

					/*	Fifth set position rounded to nearest 50 */
					let fifthSetBottomX = Math.round(this.getFifthSet.bottomPipeX / 30) * 30;
					let fifthSetTopX =	Math.round(this.getFifthSet.topPipeX / 30) * 30;
					let fifthSetY = Math.round(this.getFifthSet.y / 50) * 50;

					if(characterX >= fifthSetBottomX && characterY === fifthSetY
				||
				characterX <= fifthSetTopX && characterY === fifthSetY) {
					// console.log('********GOT HIT FIFTH********');
						alert('got hit fifth');
					}

				} else{
					this.changeScore(0);
				}
				
			}, 10);
		},
		
		jump() {
			if(this.getStart === true) {
				console.log('test');
				this.changeKeydown(true);
	
				this.jumpInterval = setInterval(() => {
					if(this.getKeydown === true) {
						this.changeTopVal(this.getTopVal - 1);
					}
				}, 10);
			} else{
				return;
			}

		},

		stopJump() {
			this.changeKeydown(false);
			console.log(this.getKeydown);
			// console.log('cleared');
			clearInterval(this.jumpInterval);
		}
	}
	
};
</script>
<style scoped>
.gameCharacter{
	position:absolute;
	background: url("../../assets/game-character.png");
	background-size: 100% 100%;
	width: 7%;
	left: 9%;
	height: 70px;
}
</style>