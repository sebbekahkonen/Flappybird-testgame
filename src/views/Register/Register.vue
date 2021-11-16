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
					v-model="name"
					:counter="10"
					:rules="nameRules"
					label="Username"
					class="username"
					required
				/>

				<v-text-field
					v-model="password"
					:rules="passwordRules"
					label="Password"
					class="password"
					required
				/>

				<v-text-field
					v-model="email"
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
export default {
	data: () => ({
		valid: true,
		name: '',
		nameRules: [
			v => !!v || 'Name is required',
			v => (v && v.length <= 10) || 'Name must be less than 10 characters'
		],
		password: '',
		passwordRules: [
			v => !!v || 'Password is required',
			v => (v && v.length >= 5) || 'Password must be atleast 5 characters'
		],
		email: '',
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

	methods: {
		Register() {
			this.$refs.form.validate();
		}
	}
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap');

	.registerDiv{
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