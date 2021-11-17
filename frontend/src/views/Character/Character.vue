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
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue';
export default {
	components:{
		Keypress: () => import('vue-keypress')
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
		...mapGetters('character', ['getTopVal', 'getPosition']),
		...mapGetters('startgame', ['getStart', 'getKeydown']),
		...mapGetters('pipes', 
			[
				'getFirstSet',
				'getSecondSet',
				'getThirdSet',
				'getFourthSet',
				'getFifthSet'
			]),
		...mapGetters('score', ['getScore']),
		...mapGetters('gameover', ['getGameover'])
	},

	created() {
		Vue.nextTick(this.characterCollision);
	},

	methods:{
		...mapActions('character', ['changeTopVal', 'changePosition']),
		...mapActions('startgame', ['changeStart', 'changeKeydown']),
		...mapActions('score', ['changeScore']),
		...mapActions('gameover', ['changeGameover']),

		startTheGame() {
			this.changeStart(true);
		},

		stopTheGame() {
			this.changeStart(false);
		},

		characterCollision() {
			setTimeout(() => {

				this.interval = setInterval(() => {
					if(this.getStart === true) {
						this.position.x = Math.round(this.$refs.character.getBoundingClientRect().top);
						this.position.y = Math.round(this.$refs.character.getBoundingClientRect().left);
						this.changePosition(this.position);
						/* Character position rounded nearest 50 */
						let characterX = Math.round(this.getPosition.x / 30) * 30;
						let characterY = Math.round(this.getPosition.y / 50) * 50;

						this.changeScore(this.getScore + 10);
		
						/* First set position rounded to nearest 50 */
						let firstSetBottomX = Math.round(this.getFirstSet.bottomPipeX / 30) * 30;
						let firstSetTopX =	Math.round(this.getFirstSet.topPipeX / 30) * 30;
						let firstSetY = Math.round(this.getFirstSet.y / 50) * 50;
	
						if(characterX >= firstSetBottomX && characterY === firstSetY
						||
						characterX <= firstSetTopX && characterY === firstSetY) {
							this.changeGameover(true);
							this.changeStart(false);
						}
		
						/*	Second set position rounded to nearest 50 */
						let secondSetBottomX = Math.round(this.getSecondSet.bottomPipeX / 30) * 30;
						let secondSetTopX =	Math.round(this.getSecondSet.topPipeX / 30) * 30;
						let secondSetY = Math.round(this.getSecondSet.y / 50) * 50;
		
						if(characterX >= secondSetBottomX && characterY === secondSetY
						||
						characterX <= secondSetTopX && characterY === secondSetY) {
							this.changeGameover(true);
							this.changeStart(true);
						}
		
						/*	Third set position rounded to nearest 50 */
						let thirdSetBottomX = Math.round(this.getThirdSet.bottomPipeX / 30) * 30;
						let thirdSetTopX =	Math.round(this.getThirdSet.topPipeX / 30) * 30;
						let thirdSetY = Math.round(this.getThirdSet.y / 50) * 50;
		
						if(characterX >= thirdSetBottomX && characterY === thirdSetY
						||
						characterX <= thirdSetTopX && characterY === thirdSetY) {
							this.changeGameover(true);
							this.changeStart(true);
						}
		
						/*	Fourth set position rounded to nearest 50 */
						let fourthSetBottomX = Math.round(this.getFourthSet.bottomPipeX / 30) * 30;
						let fourthSetTopX =	Math.round(this.getFourthSet.topPipeX / 30) * 30;
						let fourthSetY = Math.round(this.getFourthSet.y / 50) * 50;
		
						if(characterX >= fourthSetBottomX && characterY === fourthSetY
						||
						characterX <= fourthSetTopX && characterY === fourthSetY) {
							this.changeGameover(true);
							this.changeStart(true);
						}
		
						/*	Fifth set position rounded to nearest 50 */
						let fifthSetBottomX = Math.round(this.getFifthSet.bottomPipeX / 30) * 30;
						let fifthSetTopX =	Math.round(this.getFifthSet.topPipeX / 30) * 30;
						let fifthSetY = Math.round(this.getFifthSet.y / 50) * 50;
		
						if(characterX >= fifthSetBottomX && characterY === fifthSetY
						||
						characterX <= fifthSetTopX && characterY === fifthSetY) {
							this.changeGameover(true);
							this.changeStart(true);
						}
		
					} else{
						this.changeScore(0);
					}
						
				}, 10);
			}, 1000);
		},
		
		jump() {
			if(this.getStart === true) {
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