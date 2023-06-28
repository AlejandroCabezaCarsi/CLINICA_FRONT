import axios from "axios";

export const loginMe = async (credentials) => {

    const raiz = "http://localhost:3000"

    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`${raiz}/user/login`, credentials);


}

export const registerMe = async (data) => { 

    const raiz = "http://localhost:3000"

    return await axios.post(`${raiz}/user/register`, data)


}