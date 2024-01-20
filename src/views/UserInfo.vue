<template>
	<!-- modal delete -->

	<div class="wrapper">
		<button @click="openDialog">open</button>
		<dialog ref="dialog">
			<div>
				<h1>Are you sure you want to delete this post?</h1>
				<button @click="closeDialog">cancel</button>
				<button @click="deletePost">delete</button>
			</div>
		</dialog>
	</div>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	import { ref } from 'vue';

	const route = useRoute();
	const id = route.params.id;

	const dialog = ref(null);

	function openDialog() {
		dialog.value.showModal();
	}

	function closeDialog() {
		dialog.value.close();
	}
</script>

<style scoped>
	.wrapper {
		width: 100%;
		height: 100%;
	}
	dialog {
		max-width: 50ch;
		border: none !important;
	}
</style>
