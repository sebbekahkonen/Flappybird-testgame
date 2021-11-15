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
			<v-text-field
				label="Username"
				append-icon="mdi-account"
				class="username"
				hide-details="auto"
			/>
			<v-text-field label="Password"
				class="password"
				:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
				:type="show1 ? 'text' : 'password'"
				@click:append="show1 = !show1"
			/>
			<v-btn color="blue-grey lighten-2" class="loginBtn">Login</v-btn>
			<v-btn color="blue-grey darken-1" class="registerBtn">Register</v-btn>
		</v-sheet>
	</div>
</template>
<script>
export default {
	data: () => ({
		show1: false
		// rules: [
		// 	value => !!value || 'Required.',
		// 	value => (value && value.length >= 3) || 'Required.'
		// ]
	})
	
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

</style>