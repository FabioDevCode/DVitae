<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app class="teal lighten-5">

			<v-list-item class="teal darken-3 white--text">
				<v-list-item-content>
				<v-list-item-title class="text-h6 pa-2">
					Menu
				</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" :to="item.to" link>


				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>

				</v-list-item>
			</v-list>

		</v-navigation-drawer>

		<v-app-bar app class="teal darken-4 white--text">
			<v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>Dynamic Vitae</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
		</v-main>

	</v-app>

</template>

<script>
export default {
	name: 'App',
	data: () => ({
		drawer: null,
		items: [
			{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
			{ title: 'Projets', icon: 'mdi-file-presentation-box', to: '/projets' },
			{ title: 'Informations', icon: 'mdi-account-box', to: '/informations' },
			{ title: 'Documents', icon: 'mdi-file-document', to: '/documents' },
			{ title: 'Réglages', icon: 'mdi-cog', to: '/réglages' },
        ],
	}),
};
</script>