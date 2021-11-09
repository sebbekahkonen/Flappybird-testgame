<template>
	<div class="gameCharacter" :style="{top: `${getTopVal}%`}">
		<!-- <h1>{{ getTopVal }}</h1> -->
		
		<Start />
	</div>
</template>
<script>
import Start from '../Start/Start.vue';
import { mapGetters } from 'vuex';

export default {
	components:{
		Start
	},

	data: () =>({
		interval: null,
		topVal: 45,
		testVal: 0
	}),

	computed:{
		...mapGetters('character', ['getTopVal'])
	}
	
};
</script>
<style scoped>
.gameCharacter{
	position:absolute;
	background: url("../../assets/game-character.png");
	background-size: 100% 100%;
	width: 7%;
	left: 10%;
	height: 90px;
	/* border: 1px solid green; */
}
</style>