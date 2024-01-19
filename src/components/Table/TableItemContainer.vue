<template>
	<div class="table-wrapper">
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
	</div>
</template>

<script setup></script>

<style scoped>
	.table-wrapper {
		width: 100%;
		/* height: 100%; */
		background-color: var(--clr-white-100);
		padding-bottom: 20px;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

		border-radius: 5px;
		overflow: hidden;
	}

	table {
		border-collapse: collapse;
		margin: 0;
		width: 100%;
	}

	tr:nth-child(1) {
		font-size: var(--fs-sm);
		font-weight: bold;
		text-align: left;
		background-color: var(--clr-text);
		color: var(--clr-white-100);
		border: none;
	}

	tr {
		border-bottom: 1px solid var(--clr-text-soft);
	}

	tr:not(:nth-child(1)):hover {
		transition: background 150ms ease-in-out;
		background-color: rgb(218, 216, 216);
	}
	tr {
		border-radius: 10px;

		transition: background 150ms ease-in-out;
	}

	th {
		padding: 15px 10px;
	}

	td {
		padding: 10px;
		font-size: var(--fs-xs);
	}

	td:last-child {
		text-align: center;
	}

	tr:last-child {
		border-bottom: none;
	}
</style>
