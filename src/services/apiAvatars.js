import axios from "axios";

const API_ROOT = 'https://avatars.dicebear.com/api/pixel-art/';

export const generateAvatar = async (seed) => {
    return await axios
        .get(`${API_ROOT}/${seed}.svg`)
        .then((response) => {
            return response.data;
        })
        .catch((e) => console.error(e));

};

export const getSGV = (seed) => {
    return `${API_ROOT}/${seed}.svg`;

};