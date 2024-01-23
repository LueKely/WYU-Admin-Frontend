import axios from "axios";

const axiosConfig = {
    baseURL: "http://localhost:3000/api/",
    headers: {
        "Content-Type": "application/json",
    },
};

const api = axios.create(axiosConfig);

const GetAllDashboardStats = async () => {
    try {
        const response = await api.get("adm/");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const DeleteData = async (id, model) => {
    try {
        const response = await api.delete(`adm/?id=${id}&model=${model}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { GetAllDashboardStats, DeleteData };
