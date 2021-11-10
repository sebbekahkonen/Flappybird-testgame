<template>
	<div ref="character" class="gameCharacter" :style="{top: `${getTopVal}%`}">
		<!-- <h1>{{ getTopVal }}</h1> -->
		<Keypress key-event="keyup" 
			:key-code="32" 
			@success="jump"
		/>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
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
		num: 0
	}),

	computed:{
		...mapGetters('character', ['getTopVal']),
		...mapGetters('character', ['getPosition']),
		...mapGetters('startgame', ['getStart'])
	},

	created() {
	},

	methods:{
		...mapActions('character', ['changeTopVal']),
		...mapActions('character', ['changePosition']),
		...mapActions('startgame', ['changeStart']),

		startTheGame() {
			// console.log(this.getStart);
			this.changeStart(true);
			// console.log(this.getStart);
		},

		stopTheGame() {
			// console.log(this.getStart);
			this.changeStart(false);
			// console.log(this.getStart);
		},
		
		jump() {
			this.position.x = Math.round(this.$refs.character.getBoundingClientRect().left);
			this.position.y = Math.round(this.$refs.character.getBoundingClientRect().top);
			console.log('LEFT(X): ',this.getPosition.characterX);
			console.log('TOP(Y): ',this.getPosition.characterY);
			this.changePosition(this.position);
			console.log('CHANGED_LEFT(X): ',this.getPosition.characterX);
			console.log('CHANGED_TOP(Y): ',this.getPosition.characterY);
			console.log(Math.round(this.$refs.character.getBoundingClientRect().top));
			// console.log(this.getTopVal);
			// this.num = this.getTopVal - 7;
			this.changeTopVal(this.getTopVal - 7);
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
	border: 1px solid green;
}
</style>