<template>
	<TablePageLayout>
		<template #header> <h1>Manage Posts</h1> </template>
		<template #table> TEST </template>
	</TablePageLayout>
</template>

<script setup>
	import TablePageLayout from '@/layouts/TablePageLayout.vue';
</script>

<style scoped>
	h1 {
		font-size: var(--fs-l);
	}
</style>
