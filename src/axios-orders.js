import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2fefa.firebaseio.com/',
});

export default instance;