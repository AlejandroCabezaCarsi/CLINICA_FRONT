import axios from "axios";

export const bringProducts = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
};


export const loginMe = async (credentials) => {

    const raiz = "http://localhost:3000"

    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`${raiz}/user/login`, credentials);


}