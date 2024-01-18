<template>
	<div>
		<h3>{{ props.title }}</h3>
		<p>{{ props.value }}</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		title: {
			type: String,
			default: 'Title',
		},
		value: {
			type: Number,
			default: 0,
		},
	});
</script>

<style lang="scss" scoped></style>
