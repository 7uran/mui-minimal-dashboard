import axios from "axios";
import { toast } from "react-toastify";
import { mutate } from "swr";

const BASE_URL = "http://localhost:3000/jobs";

export const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetched Data:', data);
    return data;
};

export const creatList = async (data) => {
    const response = await axios.post(BASE_URL, data);
    return response.data;
};

export const handleDelete = async (id) => {
    try {
        const url = `${BASE_URL}/${id}`;
        await axios.delete(url);
        mutate(BASE_URL); 
        toast.success('Job deleted successfully!');
    } catch (error) {
        console.error(error);
        toast.error('Error deleting job');
    }
};