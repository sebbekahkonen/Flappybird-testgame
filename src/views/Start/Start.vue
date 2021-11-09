<template>
	<div class="testDiv"> 
		<Keypress key-event="keyup" :key-code="13" @success="jump" />
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	components:{
		Keypress: () => import('vue-keypress')
	},
	data: () => ({
		num: 0
	}),

	computed:{
		...mapGetters('character', ['getTopVal'])
	},

	created() {
		this.startGame();
	},

	methods: {
		...mapActions('character', ['changeTopVal']),
		startGame() {
			this.num =this.getTopVal;
			this.interval = setInterval(() => {
				this.num++;
				this.changeTopVal(this.num);
			}, 80);
		},
		jump() {
			this.num = this.num - 10;
			this.changeTopVal(this.num);
		}
	}
	
};
</script>
<style scoped>
	.testDiv{
		color: green;
		/* border: 1px solid red; */
		width: 90px;
		height: 90px;
		top: 0%;
		left: 0%;
		/* top: 10%; */
		/* left: 10%; */
		position: absolute;
	}


</style>