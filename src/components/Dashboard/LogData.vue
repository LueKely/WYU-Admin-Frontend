<template>
	<div>
		<h2>{{ props.time }}</h2>
		<h3>{{ props.type }}</h3>
		<p>{{ props.description }}</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		time: String,
		type: String,
		description: String,
	});
</script>

<style lang="scss" scoped></style>
