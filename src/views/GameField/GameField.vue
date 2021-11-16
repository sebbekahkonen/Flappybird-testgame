<template>
	<div ref="main" class="mainDiv">
		<v-img
			src="@/assets/background-image.png"
			class="mtbackgroundImg"
		/>
		<!-- <div class="startDiv"><Start /></div> -->
		<div class="characterDiv"><Character /></div>
		<div class="difficultyDiv">
			<h1 v-if="getDifficulty.normal">Difficulty: NORMAL</h1>
			<h1 v-if="getDifficulty.medium">Difficulty: MEDIUM</h1>
			<h1 v-if="getDifficulty.hard">Difficulty: HARD</h1>
			<h1 v-if="getDifficulty.expert">Difficulty: EXPERT</h1>
		</div>
		<!-- First set of pipes -->
		<div v-if="getStart" ref="test" :class="getDifficulty">
			<div ref="firstPipeBottom" class="firstPipeBottom"><p>firstpipeBottom</p></div>
			<div ref="firstPipeTop" class="firstPipeTop">firstpipeTop</div>

			<!-- Second set of pipes -->
			<div ref="secondPipeBottom" class="secondPipeBottom"><p>secondPipeBottom</p></div>
			<div ref="secondPipeTop" class="secondPipeTop">secondPipeTop</div>

			<!-- Third set of pipes -->	
			<div ref="thirdPipeBottom" class="thirdPipeBottom"><p>thirdPipeBottom</p></div>
			<div ref="thirdPipeTop" class="thirdPipeTop">thirdPipeTop</div>

			<!-- Fourth set of pipes -->	
			<div ref="fourthPipeBottom" class="fourthPipeBottom"><p>fourthPipeBottom</p></div>
			<div ref="fourthPipeTop" class="fourthPipeTop">fourthPipeTop</div>

			<!-- fifth set of pipes -->	
			<div ref="fifthPipeBottom" class="fifthPipeBottom"><p>fifthPipeBottom</p></div>
			<div ref="fifthPipeTop" class="fifthPipeTop">fifthPipeTop</div>
		</div>
		<div class="scoreDiv">
			<Score />
		</div>
	</div>
</template>
<script>
import Character from '../Character/Character.vue';
// import Start from '../Start/Start.vue';
import Score from '../Score/Score.vue';
import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue';
export default {
	components:{
		Character,
		// Start,
		Score		
	},

	data: () => ({
		interval: null,
		firstSet: {
			y: null,
			bottomPipeX: null,
			topPipeX: null
		},
		secondSet: {
			y: null,
			bottomPipeX: null,
			topPipeX: null
		},
		thirdSet: {
			y: null,
			bottomPipeX: null,
			topPipeX: null
		},
		fourthSet: {
			y: null,
			bottomPipeX: null,
			topPipeX: null
		},
		fifthSet: {
			y: null,
			bottomPipeX: null,
			topPipeX: null
		},
		difficulty: {
			normal: false,
			medium: false,
			hard: false,
			expert: false
		}
	}),

	computed: {
		...mapGetters('startgame', ['getStart']),
		...mapGetters('pipes', 
			['getFirstSet', 
				'getSecondSet', 
				'getThirdSet', 
				'getFourthSet', 
				'getFifthSet' ]),
		// ...mapGetters('pipes', ['getSecondSet']),
		// ...mapGetters('pipes', ['getThirdSet']),
		// ...mapGetters('pipes', ['getFourthSet']),
		// ...mapGetters('pipes', ['getFifthSet']),
		...mapGetters('difficulty', ['getDifficulty']),
		...mapGetters('score', ['getScore'])
	},
	mounted() {
		// Vue.nextTick(this.checkAuthentication);
		Vue.nextTick(this.setPipePosition);
	},

	methods: {
		...mapActions('startgame', ['changeStart']),
		...mapActions('pipes', ['changeFirstSet']),
		...mapActions('pipes', ['changeSecondSet']),
		...mapActions('pipes', ['changeThirdSet']),
		...mapActions('pipes', ['changeFourthSet']),
		...mapActions('pipes', ['changeFifthSet']),
		...mapActions('difficulty', ['changeDifficulty']),

		setPipePosition() {
			this.interval = setInterval(() => {
				if(this.getStart) {

					if(this.getScore < 10000) {
						this.difficulty.normal = true;
						this.difficulty.medium = false;
						this.difficulty.hard = false;
						this.difficulty.expert = false;
						console.log('normal');
						this.changeDifficulty(this.difficulty);
					}

					if(this.getScore > 10000 && this.getScore < 17000) {
						this.difficulty.normal = false;
						this.difficulty.medium = true;
						this.difficulty.hard = false;
						this.difficulty.expert = false;
						this.changeDifficulty(this.difficulty);
						console.log('medium');
					}

					if(this.getScore > 17000 && this.getScore < 22000) {
						this.difficulty.normal = false;
						this.difficulty.medium = false;
						this.difficulty.hard = true;
						this.difficulty.expert = false;
						this.changeDifficulty(this.difficulty);
						console.log('hard');

					}

					if(this.getScore > 22000) {
						this.difficulty.normal = false;
						this.difficulty.medium = false;
						this.difficulty.hard = false;
						this.difficulty.expert = true;
						this.changeDifficulty(this.difficulty);
						console.log('expert');

					}
 
					this.firstSet.y = Math.round(this.$refs.firstPipeBottom.getBoundingClientRect().left);
					this.firstSet.bottomPipeX = Math.round(this.$refs.firstPipeBottom.getBoundingClientRect().top);
					this.firstSet.topPipeX = Math.round(this.$refs.firstPipeTop.getBoundingClientRect().bottom);
					// console.log('First: ', 'Both Y: ',this.firstSet.y, 'Bottom X: ',this.firstSet.bottomPipeX, 'Top Bottom: ',this.firstSet.topPipeX);
					this.changeFirstSet(this.firstSet);
		
					/* Second set */
					this.secondSet.y = Math.round(this.$refs.secondPipeBottom.getBoundingClientRect().left);
					this.secondSet.bottomPipeX = Math.round(this.$refs.secondPipeBottom.getBoundingClientRect().top);
					this.secondSet.topPipeX = Math.round(this.$refs.secondPipeTop.getBoundingClientRect().bottom);
					// console.log('Second: ', 'Both Y: ',this.secondSet.y, 'Bottom X: ',this.secondSet.bottomPipeX, 'Top Bottom: ',this.secondSet.topPipeX);
					this.changeSecondSet(this.secondSet);
		
					/* Third set */
					this.thirdSet.y = Math.round(this.$refs.thirdPipeBottom.getBoundingClientRect().left);
					this.thirdSet.bottomPipeX = Math.round(this.$refs.thirdPipeBottom.getBoundingClientRect().top);
					this.thirdSet.topPipeX = Math.round(this.$refs.thirdPipeTop.getBoundingClientRect().bottom);
					// console.log('Third: ', 'Both Y: ',this.thirdSet.y, 'Bottom X: ',this.thirdSet.bottomPipeX, 'Top Bottom: ',this.thirdSet.topPipeX);
					this.changeThirdSet(this.thirdSet);
		
					/* Fourth set */
					this.fourthSet.y = Math.round(this.$refs.fourthPipeBottom.getBoundingClientRect().left);
					this.fourthSet.bottomPipeX = Math.round(this.$refs.fourthPipeBottom.getBoundingClientRect().top);
					this.fourthSet.topPipeX = Math.round(this.$refs.fourthPipeTop.getBoundingClientRect().bottom);
					// console.log('Fourth: ', 'Both Y: ',this.fourthSet.y, 'Bottom X: ',this.fourthSet.bottomPipeX, 'Top Bottom: ',this.fourthSet.topPipeX);
					this.changeFourthSet(this.fourthSet);
		
					/* Fifth set */
					this.fifthSet.y = Math.round(this.$refs.fifthPipeBottom.getBoundingClientRect().left);
					this.fifthSet.bottomPipeX = Math.round(this.$refs.fifthPipeBottom.getBoundingClientRect().top);
					this.fifthSet.topPipeX = Math.round(this.$refs.fifthPipeTop.getBoundingClientRect().bottom);
					// console.log('Fifth: ', 'Both Y: ',this.fifthSet.y, 'Bottom X: ',this.fifthSet.bottomPipeX, 'Top Bottom: ',this.fifthSet.topPipeX);
					this.changeFifthSet(this.fifthSet);
				} else{
					return;
				}
				/* First set */
	
			}, 10);

		}
	}

};
</script>
<style scoped>

.mainDiv{
	position: relative;
	width: 100%;
	margin-top: 5%;
}

.backgroundImg{
	width: 100%;
}

.scoreDiv{
	color: white;
	bottom: 0%;
	left: 0%;
	position: absolute;
}

.difficultyDiv{
	position: absolute;
	color: white;
	right: 1%;
	bottom: 0%;
}



.normal .firstPipeBottom, 
.normal .firstPipeTop, 
.normal .secondPipeBottom, 
.normal .secondPipeTop, 
.normal .thirdPipeBottom, 
.normal .thirdPipeTop,
.normal .fourthPipeBottom,
.normal .fourthPipeTop,
.normal .fifthPipeBottom,
.normal .fifthPipeTop
{	
	color: transparent;
	position: absolute;
	animation: pipeNormal 10s steps(1000) infinite;
}

.medium .firstPipeBottom, 
.medium .firstPipeTop, 
.medium .secondPipeBottom, 
.medium .secondPipeTop, 
.medium .thirdPipeBottom, 
.medium .thirdPipeTop,
.medium .fourthPipeBottom,
.medium .fourthPipeTop,
.medium .fifthPipeBottom,
.medium .fifthPipeTop
{	
	color: transparent;
	position: absolute;
	animation: pipeMedium 7s steps(1000) infinite;
}

.hard .firstPipeBottom, 
.hard .firstPipeTop, 
.hard .secondPipeBottom, 
.hard .secondPipeTop, 
.hard .thirdPipeBottom, 
.hard .thirdPipeTop,
.hard .fourthPipeBottom,
.hard .fourthPipeTop,
.hard .fifthPipeBottom,
.hard .fifthPipeTop
{	
	color: transparent;
	position: absolute;
	animation: pipeHard 5s steps(1000) infinite;
}

.expert .firstPipeBottom, 
.expert .firstPipeTop, 
.expert .secondPipeBottom, 
.expert .secondPipeTop, 
.expert .thirdPipeBottom, 
.expert .thirdPipeTop,
.expert .fourthPipeBottom,
.expert .fourthPipeTop,
.expert .fifthPipeBottom,
.expert .fifthPipeTop
{	
	color: transparent;
	position: absolute;
	animation: pipeExpert 4s steps(1000) infinite;
}



.firstPipeBottom, 
.secondPipeBottom, 
.thirdPipeBottom,
.fourthPipeBottom,
.fifthPipeBottom
 {
	bottom: 0%;
	background: url(http://i.imgur.com/mM1XkAr.png) no-repeat;
}

.firstPipeTop, 
.secondPipeTop, 
.thirdPipeTop,
.fourthPipeTop,
.fifthPipeTop 
{
	top: 0%;
	background:url(http://i.imgur.com/5vpjnAe.png) no-repeat;
}


.firstPipeBottom{
	background-size: 100% 100%;
	height: 45%;
	width: 5%;
}
.firstPipeTop{
	background-size: 100% 100%;
	height: 30%;
	width: 5%;
}

.secondPipeBottom{
	background-size: 100% 100%;
	height: 30%;
	width: 5%;
	margin-left: 400px;
}

.secondPipeTop{
	background-size: 100% 100%;
	height: 45%;
	width: 5%;
	margin-left: 400px;
}

.thirdPipeBottom{	
	background-size: 100% 100%;
	height: 45%;
	width: 5%;
	margin-left: 800px;
}
.thirdPipeTop{	
	background-size: 100% 100%;
	height: 30%;
	width: 5%;
	margin-left: 800px;
}

.fourthPipeBottom{	
	background-size: 100% 100%;
	height: 55%;
	width: 5%;
	margin-left: 1200px;
}
.fourthPipeTop{	
	background-size: 100% 100%;
	height: 25%;
	width: 5%;
	margin-left: 1200px;
}	

.fifthPipeBottom{	
	background-size: 100% 100%;
	height: 35%;
	width: 5%;
	margin-left: 1600px;
}
.fifthPipeTop{	
	background-size: 100% 100%;
	height: 45%;
	width: 5%;
	margin-left: 1600px;
}	

	@keyframes pipeNormal {
	from {
		left: 130%;
	}
	to {
		left: -130%;
		}
	}

	@keyframes pipeMedium {
	from {
		left: 130%;
	}
	to {
		left: -130%;
		}
	}

	@keyframes pipeHard {
	from {
		left: 130%;
	}
	to {
		left: -130%;
		}
	}

	@keyframes pipeExpert {
	from {
		left: 130%;
	}
	to {
		left: -130%;
		}
	}
</style>