<template>
    <!-- modal delete -->
    <dialog ref="dialog">
        <div class="dialog-wrapper">
            <span>
                <Icon
                    icon="ph:warning-bold"
                    width="2rem"
                    color="#fc5353"
                ></Icon>
                <p>Warning: Are you sure you want to delete this post?</p>
            </span>

            <div class="buttons-wrapper">
                <button @click="closeDialog" class="cancel">cancel</button>
                <button @click="deletePost" class="delete-btn">
                    <Icon
                        icon="octicon:trashcan-16"
                        width="2rem"
                        color="#afaf3"
                    ></Icon>
                    Delete
                </button>
            </div>
        </div>
    </dialog>

    <div class="wrapper">
        <div class="options-container">
            <div class="header-container">
                <button class="back" @click="goBack">
                    <Icon
                        color="#353535"
                        width="3rem"
                        icon="lets-icons:back"
                    ></Icon>
                </button>
                <h1>Recipe Info</h1>
            </div>
            <button @click="openDialog" class="delete-btn">
                <Icon
                    icon="octicon:trashcan-16"
                    width="2rem"
                    color="#afaf3"
                ></Icon>
                <p>Delete</p>
            </button>
        </div>
        <div class="user-container">
            <div class="container">
                <div class="label">ID:</div>
                <div class="value">
                    {{ recipeInfo._id }}
                </div>
            </div>

            <div class="container">
                <div class="label">Recipe Name:</div>
                <div class="value">
                    {{ recipeInfo.recipe_name }}
                </div>
            </div>

            <div class="container">
                <div class="label">Author Name:</div>
                <div class="value">
                    {{ recipeInfo.user_id?.username }}
                </div>
            </div>

            <div class="container">
                <div class="label">Description:</div>
                <div class="value">
                    {{ recipeInfo.description }}
                </div>
            </div>

            <div class="container">
                <div class="label">Ingredients:</div>
                <div class="value">
                    {{ stringIngredients }}
                </div>
            </div>

            <div class="container">
                <div class="label">Instructions:</div>
                <div class="value">
                    {{ stringInstructions }}
                </div>
            </div>

            <div class="container">
                <div class="label">Recipe Image URL:</div>
                <div class="value">
                    <a
                        v-if="recipeInfo.image_url"
                        :href="recipeInfo.image_url"
                        target="_blank"
                        >View Image</a
                    >
                    <p v-else>No Image</p>
                </div>
            </div>

            <div class="container">
                <div class="label">Created At:</div>
                <div class="value">
                    {{ recipeInfo.createdAt?.split("T")[0] }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useDashboardStore } from "../stores/dashboard";
import { DeleteData } from "../composables/API";

const route = useRoute();
const dashboard = useDashboardStore();

const recipeInfo = ref({});
const stringIngredients = ref("");
const stringInstructions = ref("");

onMounted(() => {
    if (route.params.id && dashboard.stats.recipes) {
        recipeInfo.value = dashboard.stats.recipes.filter(
            (recipe) => recipe._id === route.params.id
        )[0];

        stringIngredients.value = recipeInfo.value.ingredients.join(", ");
        stringInstructions.value = recipeInfo.value.instructions.join(", ");
    } else {
        router.go(-1);
    }
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

function deletePost() {
    DeleteData(recipeInfo.value._id, "recipe")
        .then((response) => {
            if (response.status === "success") {
                alert("Recipe deleted successfully");
                router.push({ name: "Dashboard" });
            }
        })
        .catch((error) => {
            console.log(error);
        });
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

.user-container {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    background-color: var(--clr-foreground);
    table-layout: fixed;
    width: 100%;
    padding: 16px 80px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 500px;
    overflow: auto;

    .container {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(197, 197, 197);
        .label {
            font-weight: bold;
            font-size: var(--fs-sm);
        }
        .value {
            font-size: var(--fs-sm);
            max-width: 500px;

            a {
                color: rgb(60, 141, 234);
                text-decoration: none;
            }
        }
    }
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
