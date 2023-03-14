import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://viacep.com.br/ws',
    baseURL: 'https://api.github.com',
});


const api = {
    getCep: async (cep) => {
        try {
            const res = await instance.get(`/${cep}/json/`);
            
            return res.data;
        } catch (error) {
            console.log(error.message);
            return undefined;   
        }
    },
    getUser: async (user) => {
        try {
            const res = await instance.get(`/users/${user}`);
            
            return res.data;
        } catch (error) {
            console.log(error.message);
            return undefined;   
        }
    },
}


export default api;