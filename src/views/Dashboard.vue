<script setup>
	import { ref, reactive } from 'vue';
	import DashboardLayout from '../layouts/DashboardLayout.vue';
	import NumberDisplay from '../components/Dashboard/NumberDisplay.vue';
	import LogsContainer from '../components/Dashboard/LogsContainer.vue';

	// this is the part where you fetch all the
	//  stuff and replace the opbjects using vbind or just use v-model
	// up to you
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
		<!-- note: pasok ka nalang sa logs container and do the fetching there mb og -->
		<template v-slot:logs>
			<LogsContainer />
		</template>
	</DashboardLayout>
</template>

<style scoped></style>
