<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	import {
		NavigationMenuItem,
		NavigationMenuList,
		NavigationMenuRoot,
		NavigationMenuLink,
	} from 'radix-vue';

	// RouterLink should be injected by default if using `vue-router`
</script>

<template>
	<NavigationMenuRoot orientation="horizontal">
		<NavigationMenuList>
			<NavigationMenuItem>
				<!-- LOGO -->
				WYU-Admin
			</NavigationMenuItem>

			<NavigationMenuItem>
				<!-- first -->
				<NavigationMenuLink :as="RouterLink" to="/">
					Dashboard
				</NavigationMenuLink>
			</NavigationMenuItem>
			<!-- second -->
			<NavigationMenuItem>
				<NavigationMenuLink :as="RouterLink" to="/Dashboard">
					Users
				</NavigationMenuLink>
			</NavigationMenuItem>
			<!-- third -->
			<NavigationMenuItem>
				<NavigationMenuLink :as="RouterLink" to="/Recipe">
					Recipe
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
</template>
