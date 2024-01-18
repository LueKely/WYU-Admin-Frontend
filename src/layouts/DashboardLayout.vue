<template>
	<!-- wrapper -->
	<main>
		<!-- no of posts and users -->
		<h1>Dashboard</h1>
		<div>
			<slot name="post">no of posts</slot>
			<slot name="users">no of users</slot>
		</div>
		<!-- logs -->
		<div>
			<h3>Logs</h3>
			<slot name="logs">logs</slot>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
