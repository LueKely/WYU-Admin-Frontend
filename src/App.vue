<script setup>
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<nav>
		<RouterLink to="/">Dashboard</RouterLink>
	</nav>

	<RouterView />
</template>

<style scoped></style>
