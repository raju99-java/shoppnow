import axios from 'axios'
// const apiUrl = 'http://localhost:5000'
const apiUrl = 'https://shoppnow-api.vercel.app'
const api = axios.create({
    baseURL: `${apiUrl}/api`,
    withCredentials : true
})
export default api