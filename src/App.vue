<script setup>
	import Navbar from './components/Navbar.vue';
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<!-- <nav>
		<RouterLink to="/">Dashboard</RouterLink>
	
	</nav> -->

	<Navbar />
	<RouterView />
</template>

<style scoped></style>
