<template>
	<div class="wrapper">
		<slot name="header">I am the header</slot>
		<slot name="table"></slot>
	</div>
</template>

<script setup></script>

<style scoped>
	.wrapper {
		width: 100%;
		height: 100%;
	}
</style>
