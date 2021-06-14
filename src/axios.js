import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rookas-backend-facebook-mern.herokuapp.com'
})

export default instance;

