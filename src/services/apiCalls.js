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

export const findUser = async (data) => {

    const raiz = "http://localhost:3000"

    return await axios.get(`${raiz}/user/getUser`,{
        headers: {
            Authorization: data
        }})
}

export const getAllAppointmentsByUserId = async (data) => {

    const raiz = "http://localhost:3000"

    return await axios.get(`${raiz}/appointment/getAllAppointmentsByUserId`,
    {
        headers: {
            Authorization: data
        },
    })
}

export const getAllMedics = async (data) => {

    const raiz = "http://localhost:3000"

    return await axios.get(`${raiz}/medic/getAllMedics`,
    {
        headers: {
            Authorization: data
        },
    })

}
export const getAllTreatments = async (data) => {

    const raiz = "http://localhost:3000"

    return await axios.get(`${raiz}/treatment/findAll`,
    {
        headers: {
            Authorization: data
        },
    })

}
export const getAllClinics = async (data) => {

    const raiz = "http://localhost:3000"

    return await axios.get(`${raiz}/clinic/findAll`,
    {
        headers: {
            Authorization: data
        },
    })

}
export const createAppointment = async (data,appointmentData) => {

    const raiz = "http://localhost:3000"

    return await axios.post(`${raiz}/appointment/create`,
        appointmentData,
    {
        headers: {
            Authorization: data
        },
    })

}

