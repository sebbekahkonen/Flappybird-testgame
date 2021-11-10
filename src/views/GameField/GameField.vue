<template>
	<div ref="main" class="mainDiv">
		<v-img
			src="@/assets/background-image.png"
			class="mtbackgroundImg"
		/>
		<div class="startDiv"><Start /></div>
		<div class="characterDiv"><Character /></div>
		<!-- First set of pipes -->
		<div v-if="getStart" ref="test">
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
			<v-btn @click="changePosition">test</v-btn>
		</div>
	</div>
</template>
<script>
import Start from '../Start/Start.vue';
import Character from '../Character/Character.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
	components:{
		Character,
		Start		
	},

	data: () => ({
		interval: null,
		firstSet: {
			y: null,
			bottomX: null,
			topBottom: null
		},
		secondSet: {
			y: null,
			bottomX: null,
			topBottom: null
		},
		thirdSet: {
			y: null,
			bottomX: null,
			topBottom: null
		},
		fourthSet: {
			y: null,
			bottomX: null,
			topBottom: null
		},
		fifthSet: {
			y: null,
			bottomX: null,
			topBottom: null
		}
	}),

	computed: {
		...mapGetters('startgame', ['getStart']),
		...mapGetters('pipes', ['getFirstSet']),
		...mapGetters('pipes', ['getSecondSet']),
		...mapGetters('pipes', ['getThirdSet']),
		...mapGetters('pipes', ['getFourthSet']),
		...mapGetters('pipes', ['getFifthSet'])

	},

	// created() {
	// 	this.callChangePosition();
	// },

	methods: {
		...mapActions('startgame', ['changeStart']),
		...mapActions('pipes', ['changeFirstSet']),
		...mapActions('pipes', ['changeSecondSet']),
		...mapActions('pipes', ['changeThirdSet']),
		...mapActions('pipes', ['changeFourthSet']),
		...mapActions('pipes', ['changeFifthSet']),

		callChangePosition() {
			this.changePosition();
		},

		changePosition() { 
			console.log(this.getFirstSet);
			this.interval = setInterval(() => {
				this.firstSet.y = Math.round(this.$refs.firstPipeBottom.getBoundingClientRect().left);
				this.firstSet.bottomX = Math.round(this.$refs.firstPipeBottom.getBoundingClientRect().top);
				this.firstSet.topBottom = Math.round(this.$refs.firstPipeTop.getBoundingClientRect().bottom);

				console.log('First: ', 'Both Y: ',this.firstSet.y, 'Bottom X: ',this.firstSet.bottomX, 'Top Bottom: ',this.firstSet.topBottom);
				this.changeFirstSet(this.firstSet);

				console.log(this.getFirstSet);

				this.changeSecondSet();
				this.changeThirdSet();
				this.changeFourthSet();
				this.changeFifthSet();
			}, 10000);
		},

		test() {
			// const testit = Math.round(this.$refs.test.getBoundingClientRect);
			// const leftval = Math.round(this.$refs.main.getBoundingClientRect().outerHeight);
			/*FirstSet*/
			const firstSetValueY = Math.round(this.$refs.firstPipeBottom.getBoundingClientRect().left);
			const firstPipeBottomValueX = Math.round(this.$refs.firstPipeBottom.getBoundingClientRect().top);
			const firstPipeTopValueBottom = Math.round(this.$refs.firstPipeTop.getBoundingClientRect().bottom);
			/*SecondSet*/
			const secondSetValueY = Math.round(this.$refs.secondPipeBottom.getBoundingClientRect().left);
			const secondPipeBottomValueX = Math.round(this.$refs.secondPipeBottom.getBoundingClientRect().top);
			const secondPipeTopValueBottom = Math.round(this.$refs.secondPipeTop.getBoundingClientRect().bottom);
			/*ThirdSet*/
			const thirdSetValueY = Math.round(this.$refs.thirdPipeBottom.getBoundingClientRect().left);
			const thirdPipeBottomValueX = Math.round(this.$refs.thirdPipeBottom.getBoundingClientRect().top);
			const thirdPipeTopValueBottom = Math.round(this.$refs.thirdPipeTop.getBoundingClientRect().bottom);
			/*FourthSet*/
			const fourthSetValueY = Math.round(this.$refs.fourthPipeBottom.getBoundingClientRect().left);
			const fourthPipeBottomValueX = Math.round(this.$refs.fourthPipeBottom.getBoundingClientRect().top);
			const fourthPipeTopValueBottom = Math.round(this.$refs.fourthPipeTop.getBoundingClientRect().bottom);
			/*FifthSet*/ 
			const fifthSetValueY = Math.round(this.$refs.fifthPipeBottom.getBoundingClientRect().left);
			const fifthPipeBottomValueX = Math.round(this.$refs.fifthPipeBottom.getBoundingClientRect().top);
			const fifthPipeTopValueBottom = Math.round(this.$refs.fifthPipeTop.getBoundingClientRect().bottom);

			console.log('First: ', 'Both Y: ',firstSetValueY, 'Bottom X: ',firstPipeBottomValueX, 'Top Bottom: ',firstPipeTopValueBottom);
			console.log('Second: ', 'Both Y: ',secondSetValueY, 'Bottom X: ',secondPipeBottomValueX, 'Top Bottom: ',secondPipeTopValueBottom);
			console.log('Second: ', 'Both Y: ',thirdSetValueY, 'Bottom X: ',thirdPipeBottomValueX, 'Top Bottom: ',thirdPipeTopValueBottom);
			console.log('Second: ', 'Both Y: ',fourthSetValueY, 'Bottom X: ',fourthPipeBottomValueX, 'Top Bottom: ',fourthPipeTopValueBottom);
			console.log('Second: ', 'Both Y: ',fifthSetValueY, 'Bottom X: ',fifthPipeBottomValueX, 'Top Bottom: ',fifthPipeTopValueBottom);
			// console.log(leftval);

			// if(leftval > 40 && leftval < 60) {
			// 	console.log(this.$refs.firstPipeBottom.getBoundingClientRect().left);
			// }
		}
	}

};
</script>
<style scoped>

.mainDiv{
	position: relative;
	width: 100%;
	margin-top: 5%;
	border: 1px solid pink
}

.startDiv{
}

.backgroundImg{
	width: 100%;
}

/* .characterDiv{
	position: absolute;
	width: 100%;
	left: 20%;
	top: 40%;
} */

.firstPipeBottom, 
.firstPipeTop, 
.secondPipeBottom, 
.secondPipeTop, 
.thirdPipeBottom, 
.thirdPipeTop,
.fourthPipeBottom,
.fourthPipeTop,
.fifthPipeBottom,
.fifthPipeTop
{
	position: absolute;
	animation: pipe 10s steps(1000) infinite;
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
	/* background-size: 52px 250px;
	height: 250px; */
	background-size: 100% 100%;
	height: 30%;
	width: 5%;
}

.secondPipeBottom{
	/* background-size: 52px 320px;
	height: 320px; */

	background-size: 100% 100%;
	height: 30%;
	width: 5%;
	margin-left: 400px;
}

.secondPipeTop{
	/* background-size: 52px 320px;
	height: 320px; */

	background-size: 100% 100%;
	height: 45%;
	width: 5%;
	margin-left: 400px;
}

.thirdPipeBottom{
	/* background-size: 52px 500px;
	height: 500px; */
	
	background-size: 100% 100%;
	height: 45%;
	width: 5%;
	margin-left: 800px;
}
.thirdPipeTop{
	/* background-size: 52px 200px;
	height: 200px; */
	
	background-size: 100% 100%;
	height: 30%;
	width: 5%;
	margin-left: 800px;
}

.fourthPipeBottom{
	/* background-size: 52px 500px;
	height: 500px; */
	
	background-size: 100% 100%;
	height: 55%;
	width: 5%;
	margin-left: 1200px;
}
.fourthPipeTop{
	/* background-size: 52px 200px;
	height: 200px; */
	
	background-size: 100% 100%;
	height: 25%;
	width: 5%;
	margin-left: 1200px;
}	


.fifthPipeBottom{
	/* background-size: 52px 500px;
	height: 500px; */
	
	background-size: 100% 100%;
	height: 35%;
	width: 5%;
	margin-left: 1600px;
}
.fifthPipeTop{
	/* background-size: 52px 200px;
	height: 200px; */
	
	background-size: 100% 100%;
	height: 45%;
	width: 5%;
	margin-left: 1600px;
}	


	@keyframes pipe {
	from {
		left: 130%;
	}
	to {
		left: -130%;
		}
	}
</style>