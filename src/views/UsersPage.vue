<template>
	<TablePageLayout>
		<template #header> <h1>Manage Users</h1> </template>
		<template #table> <TableItemContainer></TableItemContainer> </template>
	</TablePageLayout>
</template>

<script setup>
	import TablePageLayout from '@/layouts/TablePageLayout.vue';
	import TableItemContainer from '@/components/Table/TableItemContainer.vue';
</script>

<style scoped>
	h1 {
		font-size: var(--fs-l);
	}
</style>
