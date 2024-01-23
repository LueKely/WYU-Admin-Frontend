<template>
    <div>
        <h3>{{ props.title }}</h3>
        <span>
            <Icon
                v-if="props.isUser"
                width="3rem"
                icon="material-symbols:supervised-user-circle"
                color="#ffb74d"
            />
            <Icon
                v-else
                width="3rem"
                icon="iconoir:post-solid"
                color="#ffb74d"
            ></Icon>
            <p>{{ props.value }}</p>
        </span>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
    title: {
        type: String,
        default: "Title",
    },
    value: {
        type: Number,
        default: 0,
    },
    isUser: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped>
div {
    background-color: var(--clr-foreground);
    border-radius: 5px;
    padding: 10px 80px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
}

div > span {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
}

h3 {
    font-weight: bold;
    color: var(--clr-accent);
    font-size: var(--fs-xs);
}
p {
    font-size: var(--fs-xl);
}
</style>
