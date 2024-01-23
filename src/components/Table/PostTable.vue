<template>
    <div class="table-wrapper">
        <table cellspacing="0">
            <!-- headers -->
            <tr>
                <th>Recipe Name</th>
                <th>Author</th>
                <th>Date</th>
                <th></th>
            </tr>
            <!-- data replace the 10 here and add the necessary aync magic -->
            <tr v-for="recipe in recipes">
                <td>{{ recipe.recipe_name }}</td>
                <td>{{ recipe.user_id.username }}</td>
                <td>{{ recipe.createdAt.split("T")[0] }}</td>
                <td>
                    <button class="view_btn" @click="visitRecipe(recipe._id)">
                        <Icon color="" width="2rem" icon="ph:eye" /> View
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
// note: PostTable and UserTable are the same,
// i just got lazy and copy pasted the code :)
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useDashboardStore } from "../../stores/dashboard";
import { GetAllDashboardStats } from "../../composables/API";

const route = useRouter();
const dashboard = useDashboardStore();
const recipes = ref({});

onMounted(() => {
    if (dashboard.stats.recipes) {
        recipes.value = dashboard.stats.recipes;
    } else {
        GetAllDashboardStats()
            .then((res) => {
                if (res.status === "success") {
                    dashboard.stats = res.data;
                    recipes.value = dashboard.stats.recipes;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
});

function visitRecipe(id) {
    route.push({ name: "RecipesId", params: { id: id } });
}
</script>

<style scoped>
.table-wrapper {
    width: 100%;
    height: 550px;
    background-color: var(--clr-white-100);
    padding-bottom: 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow-y: scroll;
}

table {
    border-collapse: collapse;
    width: 100%;
}

tr:nth-child(1) {
    position: sticky;
    top: 0;
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
    display: flex;
    align-items: center;
    justify-content: center;
}

.view_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;

    border: solid 1px var(--clr-accent);

    background-color: var(--clr-foreground);
    color: var(--clr-accent);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: var(--fs-xs);
    cursor: pointer;
}

.view_btn:hover {
    transition: background 150ms ease-in-out;
    background-color: var(--clr-accent-soft);
    color: var(--clr-white-100);
}
</style>
