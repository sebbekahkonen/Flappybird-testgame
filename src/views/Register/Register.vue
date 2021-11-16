<template>
	<div> 
		<v-form
			ref="form"
			v-model="valid"
			lazy-validation
		>
			<v-text-field
				v-model="name"
				:counter="10"
				:rules="nameRules"
				label="Username"
				required
			/>

			<v-text-field
				v-model="password"
				:rules="passwordRules"
				label="Password"
				required
			/>

			<v-text-field
				v-model="email"
				:rules="emailRules"
				label="E-mail"
				required
			/>

			<v-checkbox
				v-model="checkbox"
				:rules="[v => !!v || 'You must agree to continue!']"
				label="Do you agree to the terms and conditions?"
				required
			/>

			<v-btn
				:disabled="!valid"
				color="grey lighten-3"
				class="mr-4 ml-16"
				width="1100px"
				
				@click="Register"
			>
				Register
			</v-btn>
		</v-form>
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
</style>