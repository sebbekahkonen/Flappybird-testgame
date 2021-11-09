<template>
	<div class="mainDiv">
		<v-img
			src="@/assets/background-image.png"
			class="mtbackgroundImg"
		/>
		<div class="characterDiv"><Character /></div>
		<!-- First set of pipes -->
		<div class="firstPipeBottom"><p>firstpipeBottom</p></div>
		<div class="firstPipeTop">firstpipeTop</div>

		<!-- Second set of pipes -->
		<div class="secondPipeBottom"><p>secondPipeBottom</p></div>
		<div class="secondPipeTop">secondPipeTop</div>

		<!-- Third set of pipes -->	
		<div class="thirdPipeBottom"><p>thirdPipeBottom</p></div>
		<div class="thirdPipeTop">thirdPipeTop</div>

		<!-- Fourth set of pipes -->	
		<div class="fourthPipeBottom"><p>fourthPipeBottom</p></div>
		<div class="fourthPipeTop">fourthPipeTop</div>

		<!-- fifth set of pipes -->	
		<div class="fifthPipeBottom"><p>fifthPipeBottom</p></div>
		<div class="fifthPipeTop">fifthPipeTop</div>
	</div>
</template>
<script>
import Character from '../Character/Character.vue';
export default {
	components:{
		Character		
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