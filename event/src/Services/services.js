import axios from "axios";

const apiPorta = "5289"

//apilocal ela recebe o endereco da api
const apilocal = ` http://localhost:${apiPorta}/api/`;

const api = axios.create({
    baseURL: apilocal
});

export default api;