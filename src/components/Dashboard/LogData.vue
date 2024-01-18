<template>
	<div class="wrapper-data">
		<h2>{{ props.time }}</h2>
		<h1>{{ props.type }}</h1>
		<p>{{ props.description }}</p>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';

	const props = defineProps({
		time: String,
		type: String,
		description: String,
	});
</script>

<style scoped>
	.wrapper-data {
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

		width: 100%;
		background-color: var(--clr-foreground);
		border-radius: 5px;
		padding: 10px;
	}

	h2 {
		font-size: var(--fs-xs);
		font-weight: lighter;
	}

	h1 {
		font-size: var(--fs-sm);
		color: var(--clr-accent);
	}

	p {
		font-size: var(--fs-sm);
	}
</style>
