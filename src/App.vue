<template>
	<v-app id="inspire">
		<v-app-bar
			app
			color="grey darken-3"
			flat
		>
			<v-avatar
				:color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
				size="32"
			/>

			<v-tabs
				centered
				class="ml-n9"
				color="white"
			>
				<v-tab
					v-for="link in links"
					:key="link.title"
					:to="link.to"
				>
					<v-icon>{{ link.icon }}</v-icon>
					{{ link.title }}
				</v-tab>
			</v-tabs>

			<v-avatar
				class="hidden-sm-and-down"
				color="grey darken-1 shrink"
				size="32"
			/>
		</v-app-bar>

		<v-main class="grey darken-1">
			<router-view />
			<!--  -->
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		links: [
			{title: 'Start', icon: 'mdi-play-box-outline', to:'/'},
			{title: 'Profile', icon: 'mdi-autorenew', to:'/profile'},
			{title: 'Login', icon: 'mdi-account', to:'/login'},
			{title: 'Exit', icon: 'mdi-exit-run', to:'/exit'}
		]
	})
};
</script>

<style>
</style>
