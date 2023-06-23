export const bringProducts = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
};
};

export const loginMe = async (credentials) => {

    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`urldelbackendqueseencargadellogin`, credentials);


}