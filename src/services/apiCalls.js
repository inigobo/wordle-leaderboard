require('dotenv').config();
import axios from "axios";
const AVATAR_ROOT = 'https://avatars.dicebear.com/api/pixel-art';
const SERVER_ROOT = 'http://localhost:8000';
const GIPHY_ROOT = 'https://api.giphy.com/v1/gifs';
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

export const getUsers = async () => {
    try {
        let config = {
            method: 'get',
            url: `${SERVER_ROOT}/users`
        }
        return await axios(config);
    } catch (error) {
        console.log(error);
    }
};

export const getPlays = async () => {
    try {
        let config = {
            method: 'get',
            url: `${SERVER_ROOT}/plays`
        }
        return await axios(config);
    } catch (error) {
        console.log(error);
    }
};

export const getPlaysById = async (playId) => {
    let config = {
        method: 'get',
        url: `${SERVER_ROOT}/plays?playId=${playId}`
    }
    const response = await axios(config);
    return response;
};

export const getSGV = (seed) => {
    return `${AVATAR_ROOT}/${seed}.svg`;

};

export const registerUser = (user) => {
    let config = {
        method: 'post',
        url: `${SERVER_ROOT}/users`,
        data: user
    }
    return axios(config);
};

export const registerPlay = (play) => {
    let config = {
        method: 'post',
        url: `${SERVER_ROOT}/plays`,
        data: play
    }
    return axios(config);
};

export const userExists = async (username) => {
    let config = {
        method: 'get',
        url: `${SERVER_ROOT}/users?username=${username}`
    }
    const response = await axios(config);
    return response.data.length > 0;
}
export const getUser = async (username) => {
    let config = {
        method: 'get',
        url: `${SERVER_ROOT}/users?username=${username}`
    }
    const response = await axios(config);
    return response.data[0];
}

export const getGifsByWord = async (wordleWord) => {
    let config = {
        method: 'get',
        url: `${GIPHY_ROOT}/search?q=${wordleWord}&limit=4&api_key=${GIPHY_API_KEY}`,
    }
    const response = await axios(config);
    return response.data.data;
}

export const updateProfile = (profile) => {
    let config = {
        method: 'patch',
        url: `${SERVER_ROOT}/users`,
        data: profile
    }
    return axios(config);
};