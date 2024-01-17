<script setup>
	import { NavigationMenuLink } from 'radix-vue';
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<nav>
		<RouterLink to="/">Dashboard</RouterLink>
	</nav>

	<RouterView />
</template>

<style scoped></style>
