import { ref } from "vue";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboardStats", () => {
    const stats = ref({});

    return {
        stats,
    };
});
