import axios from "axios";
const API_URL = '/api/tasks';

const buildUrl = (id = "") => id ? `${API_URL}/${id}` : API_URL;

export const getTasks = async () => {
    try {
        return await axios.get(buildUrl());
    } catch (err) {
        console.error("getTasks error:", err);
        throw err;
    }
};

export const addTask = async (task) => {
    try {
        return await axios.post(buildUrl(), task);
    } catch (err) {
        console.error("addTask error:", err);
        throw err;
    }
};

export const deleteTask = async (id) => {
    try {
        return await axios.delete(buildUrl(id));
    } catch (err) {
        console.error("deleteTask error:", err);
        throw err;
    }
};

export const updateTask = async (task) => {
    try {
        return await axios.put(buildUrl(task.id), {...task});
    } catch (err) {
        console.error("updateTask error:", err);
        throw err;
    }
};