<template>
	<!-- modal delete -->
	<dialog ref="dialog">
		<div class="dialog-wrapper">
			<span>
				<Icon icon="ph:warning-bold" width="2rem" color="#fc5353"></Icon>
				<p>Warning: Are you sure you want to delete this post?</p>
			</span>

			<div class="buttons-wrapper">
				<button @click="closeDialog" class="cancel">cancel</button>
				<button @click="deletePost" class="delete-btn">
					<Icon icon="octicon:trashcan-16" width="2rem" color="#afaf3"></Icon>
					Delete
				</button>
			</div>
		</div>
	</dialog>

	<div class="wrapper">
		<div class="options-container">
			<div class="header-container">
				<button class="back" @click="goBack">
					<Icon color="#353535" width="3rem" icon="lets-icons:back"></Icon>
				</button>
				<h1>User Info</h1>
			</div>
			<button @click="openDialog" class="delete-btn">
				<Icon icon="octicon:trashcan-16" width="2rem" color="#afaf3"></Icon>
				<p>Delete</p>
			</button>
		</div>
		<table class="user-container" cellpadding="5" cellspacing="0">
			<!-- replace dummy data in the loop -->
			<tr v-for="(value, key) in dummyData" :key="key">
				<td>{{ key }}:</td>
				<td>{{ value }}</td>
			</tr>
		</table>
	</div>
</template>

<script setup>
	import { Icon } from '@iconify/vue';
	import { ref, reactive } from 'vue';
	import { useRouter } from 'vue-router';

	const dummyData = reactive({
		id: 1,
		name: 'John Doe',
		email: 'lue',
		phone: '123456789',
		website: 'www.google.com',
		birthdate: '01/01/2000',
		company: 'Google',
		sex: 'alot',
	});

	const dialog = ref(null);
	const router = useRouter();

	function goBack() {
		router.go(-1);
	}

	function openDialog() {
		dialog.value.showModal();
	}

	function closeDialog() {
		dialog.value.close();
	}

	// put async magic here
	function deletePost() {
		console.log('delete');
	}
</script>

<style scoped>
	.buttons-wrapper {
		align-self: flex-end;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 10px;
	}

	.dialog-wrapper {
		font-size: var(--fs-m);
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 10px;
	}
	.dialog-wrapper > span {
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 10px;
		font-size: var(--fs-sm);
	}

	table {
		background-color: var(--clr-foreground);
		table-layout: fixed;
		width: 100%;
		padding: 10px;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
		border-radius: 5px;
	}

	td:first-child {
		font-weight: bold;
	}

	td {
		font-size: var(--fs-m);
	}
	.delete-btn {
		background-color: #fc5353;
		border: 2px solid rgb(252, 83, 83);
		border-radius: 5px;
		color: var(--clr-white-100);
		font-size: var(--fs-sm);
		padding: 5px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 10px;
	}

	.delete-btn:hover {
		transition: all 150ms ease-in-out;
		cursor: pointer;
		/* border-color: var(--clr-white-100); */
		background: var(--clr-white-100);
		color: rgb(252, 83, 83);
		fill: rgb(252, 83, 83);

		outline-offset: 5px;
	}

	.options-container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 10px;
	}

	h1 {
		font-size: var(--fs-l);
	}

	.back {
		background-color: transparent;
		border: none;
		border-radius: 5px;
	}
	.back:hover {
		transition: background 150ms ease-in-out;
		cursor: pointer;
		background: var(--clr-text-soft);
	}
	.wrapper {
		width: 80%;
		height: 100%;
		display: flex;
		justify-content: start;
		align-items: center;
		flex-direction: column;
		row-gap: 10px;
	}
	dialog {
		border-radius: 5px;
		/* max-width: 50ch; */
		border: none !important;
	}
</style>
