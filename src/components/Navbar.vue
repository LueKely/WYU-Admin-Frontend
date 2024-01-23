<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <nav>
        <div class="wrapper">
            <img src="/public/wyu-icon.svg" width="50" height="50" alt="Logo" />
            <h1>WYU: Admin</h1>
        </div>

        <ul>
            <li><RouterLink to="/">Dashboard</RouterLink></li>
            <li><RouterLink to="/users">Users</RouterLink></li>
            <li><RouterLink to="/recipes">Posts</RouterLink></li>
        </ul>
    </nav>
</template>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
}

nav {
    border: 1px solid var(--clr-border);

    padding: 10px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--clr-foreground);
}

ul {
    padding: 5px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;
    column-gap: 10px;
    border-radius: 5px;
}

li > a {
    font-weight: bold;
    color: var(--clr-text);
    text-decoration: none;
    font-size: var(--fs-xs);
}
a.router-link-active {
    text-decoration: underline;
}
li {
    width: 100%;
    border-radius: 5px;
    transition: background 0.2s ease-in-out;
    padding: 5px 10px;
}

li:hover {
    transition: background 0.2s ease-in-out;

    background: var(--clr-accent-soft);
}
</style>
