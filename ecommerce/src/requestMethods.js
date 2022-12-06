import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjE0ZDk5NDNiODlkYzAwZDg5M2RhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODYxMTY4NCwiZXhwIjoxNjY4ODcwODg0fQ.VPSr7VR5D9zqMs2cnnTNa7w5mi9XgadgkpMU8QZaV4g';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});