<script setup>
import { onMounted } from "vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import NumberDisplay from "../components/Dashboard/NumberDisplay.vue";
import Chart from "../components/Dashboard/Chart.vue";
import { GetAllDashboardStats } from "../composables/API";
import { useDashboardStore } from "../stores/dashboard";

const dashboard = useDashboardStore();

onMounted(() => {
    GetAllDashboardStats()
        .then((res) => {
            if (res.status === "success") {
                dashboard.stats = res.data;
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
</script>

<template>
    <DashboardLayout>
        <!-- post component -->
        <template v-slot:post>
            <NumberDisplay
                title="No. of Posts"
                :value="dashboard.stats.totalRecipes"
                :isUser="false"
            />
        </template>
        <!-- user component -->
        <template v-slot:users>
            <NumberDisplay
                title="No. of Users"
                :value="dashboard.stats.totalUsers"
                :isUser="true"
            />
        </template>
        <template v-slot:logs>
            <Chart
                v-if="Object.keys(dashboard.stats).length > 0"
                :data="dashboard?.stats"
            />
        </template>
    </DashboardLayout>
</template>

<style scoped></style>
