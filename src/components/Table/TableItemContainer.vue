<template>
	<table cellspacing="0">
		<!-- headers -->
		<tr>
			<th>Username</th>
			<th>Firstname</th>
			<th>Lastname</th>
			<th>Date</th>
			<th></th>
		</tr>
		<!-- data -->
		<tr v-for="i in 10">
			<td>Hamburger</td>
			<td>Hamburger</td>
			<td>Not Hamberger</td>
			<td>Burg</td>
			<td>VIEW</td>
		</tr>
	</table>
</template>

<script setup></script>

<style scoped>
	table {
		border-collapse: collapse;
		margin: 0;
		width: 100%;
		background-color: var(--clr-foreground);
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		padding-bottom: 20px;
	}

	tr:nth-child(1) {
		font-size: var(--fs-sm);
		font-weight: bold;
		text-align: left;
		background-color: var(--clr-accent);
		color: var(--clr-white-100);
		border: none;
	}

	tr {
		border-bottom: 1px solid var(--clr-text-soft);
	}

	tr:hover {
		transition: background 150ms ease-in-out;
		background-color: var(--clr-accent-soft);
	}
	tr {
		transition: background 150ms ease-in-out;
	}

	th {
		font-weight: bold;
	}

	th,
	td {
		padding-left: 10px;
	}

	td {
		padding: 10px;
		font-size: var(--fs-xs);
	}

	td:last-child {
		text-align: center;
	}
</style>
