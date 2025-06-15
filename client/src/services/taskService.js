import axios from "axios";
const API_URL = 'http://localhost:5000/api/tasks'; // Example for JSON-server

const buildUrl = (id = "") => id ? `${API_URL}/${id}` : API_URL;

export const getTasks = async () => {
    return await axios.get(buildUrl());
};

export const addTask = async (task) => {
    return await axios.post(buildUrl(), task);
};

export const deleteTask = async (id) => {
    return await axios.delete(buildUrl(id));
};

export const updateTask = async (task) => {
    return await axios.put(buildUrl(task.id), task);
};

