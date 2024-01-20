<template>
	<TablePageLayout>
		<template #header> <h1>Manage Recipes</h1> </template>
		<template #table><PostTable></PostTable> </template>
	</TablePageLayout>
</template>

<script setup>
	import TablePageLayout from '@/layouts/TablePageLayout.vue';
	import PostTable from '@/components/Table/PostTable.vue';
</script>

<style scoped>
	h1 {
		font-size: var(--fs-l);
	}
</style>
