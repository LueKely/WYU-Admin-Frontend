<script setup>
	import Navbar from './components/Navbar.vue';
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<main><Navbar /><RouterView /></main>
</template>

<style scoped>
	main {
		display: flex;

		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100dvh;
	}

	main:first-child {
		flex: 0.5;
	}
	main:last-child {
		flex: 2;
	}
</style>
