import axios from 'axios'

export default {
    loadLogo(logo) {
        return axios.post('requests/upload', logo);
    },

   

}