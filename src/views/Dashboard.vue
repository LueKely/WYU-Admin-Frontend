<script setup>
	import DashboardLayout from '../layouts/DashboardLayout.vue';
	import NumberDisplay from '../components/Dashboard/NumberDisplay.vue';
	import LogsContainer from '../components/Dashboard/LogsContainer.vue';
</script>

<template>
	<DashboardLayout>
		<!-- post component -->
		<template v-slot:post>
			<NumberDisplay title="No. of Posts" :value="102" :isUser="false" />
		</template>
		<!-- user component -->
		<template v-slot:users>
			<NumberDisplay title="No. of Users" :value="245" :isUser="true" />
		</template>
		<!-- log component -->
		<template v-slot:logs>
			<LogsContainer />
		</template>
	</DashboardLayout>
</template>

<style scoped></style>
