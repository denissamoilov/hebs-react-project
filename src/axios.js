import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.23.25/'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;