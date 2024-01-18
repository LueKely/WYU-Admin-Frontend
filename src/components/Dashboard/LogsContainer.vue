<template>
	<div>
		<LogData v-for="i in count" v-bind="data"></LogData>
	</div>
</template>

<script setup>
	import { ref, reactive } from 'vue';
	import LogData from './LogData.vue';
	const count = ref(10);
	const data = reactive({
		time: '2021-09-01 12:00:00',
		type: 'info',
		description: 'User logged in',
	});
</script>

<style lang="scss" scoped></style>
