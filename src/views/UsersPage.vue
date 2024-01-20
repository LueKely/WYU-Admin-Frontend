<template>
	<TablePageLayout>
		<template #header> <h1>Manage Users</h1> </template>
		<template #table>
			<UserTable></UserTable>
		</template>
	</TablePageLayout>
</template>

<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import TablePageLayout from '@/layouts/TablePageLayout.vue';
	import UserTable from '@/components/Table/UserTable.vue';
</script>

<style scoped>
	h1 {
		font-size: var(--fs-l);
	}
</style>
