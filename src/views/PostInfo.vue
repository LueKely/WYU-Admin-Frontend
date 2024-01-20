<template>
	<div>Postinfo {{ id }}</div>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	// get the id from the route
	const route = useRoute();
	const id = route.params.id;
</script>

<style lang="scss" scoped></style>
