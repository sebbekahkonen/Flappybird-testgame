<template>
	<div>
		<v-img
			src="@/assets/background-image.png"
			class="ma-10 backgroundImg"
			min-width="100vh"
			min-height="70vh"
		/>


		<v-img
			src="@/assets/pipe-lowerIsHigher.png"
			class="leftPipe1"
		/>
		<v-img
			src="@/assets/pipe-higherIsLower.png"
			class="middlePipe1"
		/>


		<v-img
			src="@/assets/pipe-regular.png"
			class="rightPipe1"
		/>
		<v-img
			src="@/assets/pipe-lowerIsHigher.png"
			class="leftPipe2"
		/>


		<v-img
			src="@/assets/pipe-higherIsLower.png"
			class="middlePipe2"
		/>
		<v-img
			src="@/assets/pipe-regular.png"
			class="rightPipe2"
		/>
	</div>
</template>
<script>
export default {
	
};
</script>
<style scoped>

.backgroundImg{
	position: absolute;
	left: 0px;
	margin-right: auto;
	width: 90%;
}

.leftPipe1,.rightPipe1,.middlePipe1,.leftPipe2,.rightPipe2,.middlePipe2{
	position: absolute;
	animation: pipe 10s steps(300) infinite;
}

.leftPipe1{
	top: -8px;
	height: 935px;
	width: 200px;
	
}
.middlePipe1{
	
	height: 935px;
	width: 200px;
}
.rightPipe1{
	
	height: 935px;
	width: 200px;
	margin-left: 300px;
}


.leftPipe2{
	top: -8px;
	height: 935px;
	width: 200px;
	margin-left: 300px;
}
.middlePipe2{
	height: 935px;
	width: 200px;
	margin-left: 600px;

}
.rightPipe2{
	height: 935px;
	width: 200px;
	margin-left: 600px;
}	
	@keyframes pipe {
	from {
		left: 90%;
	}
	to {
		left: -90%;
		}
	}
</style>