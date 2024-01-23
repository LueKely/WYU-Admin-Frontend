<template>
    <div class="canvas-container">
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const dates = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const postDataDates = ref({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
});

const userDataDates = ref({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
});

const getMonth = (date) => {
    const month = date.split("-")[1];
    return month;
};

const getMonthName = (month) => {
    switch (month) {
        case "01":
            return "january";
        case "02":
            return "february";
        case "03":
            return "march";
        case "04":
            return "april";
        case "05":
            return "may";
        case "06":
            return "june";
        case "07":
            return "july";
        case "08":
            return "august";
        case "09":
            return "september";
        case "10":
            return "october";
        case "11":
            return "november";
        case "12":
            return "december";
        default:
            return "january";
    }
};

const getMonthCountRecipes = (data) => {
    data.forEach((item) => {
        const month = getMonth(item.createdAt);
        const monthName = getMonthName(month);
        postDataDates.value[monthName] += 1;
    });
};

const getMonthCountUsers = (data) => {
    data.forEach((item) => {
        const month = getMonth(item.createdAt);
        const monthName = getMonthName(month);
        userDataDates.value[monthName] += 1;
    });
};

getMonthCountRecipes(props.data.recipes);
getMonthCountUsers(props.data.users);

onMounted(() => {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "# of Users",
                    data: [
                        userDataDates.value.january,
                        userDataDates.value.february,
                        userDataDates.value.march,
                        userDataDates.value.april,
                        userDataDates.value.may,
                        userDataDates.value.june,
                        userDataDates.value.july,
                        userDataDates.value.august,
                        userDataDates.value.september,
                        userDataDates.value.october,
                        userDataDates.value.november,
                        userDataDates.value.december,
                    ],
                    borderWidth: 1,
                },
                {
                    label: "# of Posts",
                    data: [
                        postDataDates.value.january,
                        postDataDates.value.february,
                        postDataDates.value.march,
                        postDataDates.value.april,
                        postDataDates.value.may,
                        postDataDates.value.june,
                        postDataDates.value.july,
                        postDataDates.value.august,
                        postDataDates.value.september,
                        postDataDates.value.october,
                        postDataDates.value.november,
                        postDataDates.value.december,
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
</script>

<style scoped>
.wrapper {
    padding-top: 10px;
    padding-inline: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: clamp(300px, 30dvw, 900px);
    overflow-y: scroll;
    row-gap: 10px;
    scrollbar-gutter: stable;
    scroll-behavior: smooth;
}

.canvas-container {
    background-color: #fafaf3;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    #myChart {
        width: 100%;
        height: 100%;
    }
}
</style>
