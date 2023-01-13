import axios from "axios";

const AVATAR_ROOT = 'https://avatars.dicebear.com/api/pixel-art';
const SERVER_ROOT = 'http://localhost:8000';

export const getUsers = async () => {
    return await axios
        .get(`${SERVER_ROOT}/users`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((e) => console.error(e));

};

export const getPlaysById = async (playId) => {
    return await axios
        .get(`${SERVER_ROOT}/plays`)
        .then((response) => {
            console.log('resp', response);
            const play = response.data.find((play)=>{
                play.playId === playId
            });
            console.log('play', play);
            return play;
        })
        .catch((e) => console.error(e));
};

export const getSGV = (seed) => {
    return `${AVATAR_ROOT}/${seed}.svg`;

};