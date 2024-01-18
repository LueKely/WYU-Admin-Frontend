<template>
	<!-- wrapper -->
	<div class="wrapper">
		<!-- no of posts and users -->
		<h1>Dashboard</h1>
		<div class="data-wrapper">
			<slot name="post">no of posts</slot>
			<slot name="users">no of users</slot>
		</div>
		<!-- logs -->
		<div>
			<h3>Logs</h3>
			<slot name="logs">logs</slot>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
	.wrapper {
		width: 100%;
		height: 100%;
	}

	.data-wrapper {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		column-gap: 10px;
	}

	h1 {
		font-size: var(--fs-l);
	}

	h3 {
		font-size: var(--fs-m);
	}
</style>
