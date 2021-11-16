<template>
	<div class="loginDiv" color="grey lighten-2"> 
		<v-sheet
			elevation="18"
			class="mx-auto"
			height="500px"
			width="100%"
			color="grey lighten-2"
		>
			<h1>login</h1>
			<p class="errorCode">{{ errorCode }}</p>
			<v-text-field
				v-model="formData.username"
				label="Username"
				append-icon="mdi-account"
				class="username"
				hide-details="auto"
			/>
			<v-text-field
				v-model="formData.password" 
				label="Password"
				class="password"
				:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
				:type="show1 ? 'text' : 'password'"
				@click:append="show1 = !show1"
			/>
			<v-btn v-if="!isPending" color="blue-grey lighten-2" class="loginBtn" @click="loginUser">Login</v-btn>
			<v-btn v-if="!isPending" color="blue-grey darken-1" class="registerBtn" @click="$router.push('/register')">Register</v-btn>
			<Spinner v-if="isPending" />
		</v-sheet>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Spinner from '@/components/Spinner';
export default {
	components: {
		Spinner
	},

	data: () => ({
		show1: false,
		formData: {
			username: '',
			password: ''
		},
		errorCode: '',
		isPending: false
	}),

	computed: {
		...mapGetters('authentication', ['getAuthentication']),
		validation() {
			return{
				inputFilled: this.formData.username && 
				this.formData.password !== '' 
			};
		}
	},

	created() {
		this.changeAuthentication(false);
	},
	
	methods: {
		...mapActions('user', ['login']),
		...mapActions('authentication', ['changeAuthentication']),
		async loginUser() {
			this.errorCode = '';
			this.isPending = true;
			try{
				await this.login(this.formData);
				this.changeAuthentication(true);
				this.$router.push('/');
			}catch(err) {
				this.errorCode = err;
				console.log(err);
			}finally{
				this.isPending = false;
			}

		}
	}
	
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap');

	.loginDiv{
		margin-top: 20%;
		position: absolute;
		left: 25%;
		width: 50%;
		height: 500px;
		/* border: 1px solid green; */
		text-align: center;
		border-radius: 10px;
		/* background: linear-gradient(to bottom, rgb(194, 194, 194), rgb(235, 235, 235)); */
	}
	h1{
		padding: 10px;
		text-transform:capitalize;
		font-family: 'Shippori Antique B1', sans-serif;
	}
	.mx-auto{
		border-radius: 10px;
	}
	.username{
		padding: 10px;
		margin-top: 30px;
	}

	.password{
		padding: 10px;	
	}
	.loginBtn{
		margin-top: 2%;
		width: 80%;
		color: white;
		background: linear-gradient(to bottom, rgb(105, 105, 105), rgb(175, 175, 175));

	}
	.registerBtn{
		margin-top: 5%;
		width: 60%;
		color: white;
		background: linear-gradient(to bottom, rgb(105, 105, 105), rgb(175, 175, 175));
	}
	.errorCode{
		color: red;
	}

</style>