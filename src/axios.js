import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://192.168.23.25/'
    baseURL: 'http://192.168.0.32/'
    // baseURL: 'http://localhost/'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;