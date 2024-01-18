<template>
	<div class="wrapper">
		<LogData v-for="i in count" v-bind="data"></LogData>
	</div>
</template>

<script setup>
	// use v-bind to pass props to child components
	import { ref, reactive } from 'vue';
	import LogData from './LogData.vue';

	// this is the sample for how much data to show
	const count = ref(10);

	// this is the sample
	const data = reactive({
		time: '2021-09-01 12:00:00',
		type: 'info',
		description: 'User logged in',
	});
</script>

<style scoped>
	.wrapper {
		padding-top: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: clamp(300px, 45dvh, 50dvh);
		overflow-y: scroll;
		row-gap: 10px;

		scroll-behavior: smooth;
	}
</style>
