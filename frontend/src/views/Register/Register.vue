<template>
	<div class="registerDiv" color="grey lighten-2"> 
		<v-sheet
			elevation="18"
			class="mx-auto"
			height="500px"
			width="100%"
			color="grey lighten-2"
		>
			<h1>Register</h1>
			<v-form
				ref="form"
				v-model="valid"
				lazy-validation
				class="registerForm"
			>
				<v-text-field
					v-model="formData.username"
					:counter="10"
					:rules="nameRules"
					label="Username"
					class="username"
					required
				/>

				<v-text-field
					v-model="formData.password"
					:rules="passwordRules"
					label="Password"
					class="password"
					required
				/>

				<v-text-field
					v-model="formData.email"
					:rules="emailRules"
					label="E-mail"
					class="email"
					required
				/>

				<v-checkbox
					v-model="checkbox"
					:rules="[v => !!v || 'You must agree to continue!']"
					label="Do you agree to the terms and conditions?"
					class="checkBox"
					required
				/>

				<v-btn
					:disabled="!valid"
					color="grey lighten-3"
					class="mr-4"
					width="350px"
				
					@click="Register"
				>
					Register
				</v-btn>
			</v-form>
		</v-sheet>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	data: () => ({
		formData: {
			id: 1234,
			username: '',
			password: '',
			email: '',
			token: '1A2s3d'	
		},
		
		valid: true,
		nameRules: [
			v => !!v || 'Name is required',
			v => (v && v.length <= 10) || 'Name must be less than 10 characters'
		],
		passwordRules: [
			v => !!v || 'Password is required',
			v => (v && v.length >= 5) || 'Password must be atleast 5 characters'
		],
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
		],
		select: null,
		items: [
			'Item 1',
			'Item 2',
			'Item 3',
			'Item 4'
		],
		checkbox: false
	}),

	computed: {
		...mapGetters('user', ['getNewUser'])
	},

	methods: {
		...mapActions('authentication', ['changeAuthentication']),
		...mapActions('user', ['addUser']),

		Register() {
			console.log('BEFORE: ',this.getNewUser);
			this.addUser(this.formData);
			console.log('AFTER: ',this.getNewUser);
			this.changeAuthentication(true);
			this.$router.push('/');
		}
	}
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap');

	.registerDiv{
		margin-top: 2%;
		position: absolute;
		left: 25%;
		width: 50%;
		height: 500px;
		text-align: center;
		border-radius: 10px;
	}
	
	h1{
		margin-bottom: 30px;
		font-family: 'Shippori Antique B1', sans-serif;
	}

	.mx-auto{
		border-radius: 10px;
	}

	.username{
		padding: 10px;
	}

	.password{
		padding: 10px;	
	}

	.email{
		padding: 10px;
	}

	.checkBox{
		padding: 0px 0px 10px 10px;
	}
</style>