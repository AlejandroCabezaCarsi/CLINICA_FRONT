import axios from "axios";

export const loginMe = async (credentials) => {
  const raiz = "http://localhost:3000";

  //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
  return await axios.post(`${raiz}/user/login`, credentials);
};

export const registerMe = async (data) => {
  const raiz = "http://localhost:3000";

  return await axios.post(`${raiz}/user/register`, data);
};

export const findUser = async (data) => {
  const raiz = "http://localhost:3000";

  return await axios.get(`${raiz}/user/getUser`, {
    headers: {
      Authorization: data,
    },
  });
};

export const getAllAppointmentsByUserId = async (data) => {
  const raiz = "http://localhost:3000";

  return await axios.get(`${raiz}/appointment/getAllAppointmentsByUserId`, {
    headers: {
      Authorization: data,
    },
  });
};

export const getAllMedics = async (data) => {
  const raiz = "http://localhost:3000";

  return await axios.get(`${raiz}/medic/getAllMedics`, {
    headers: {
      Authorization: data,
    },
  });
};
export const getAllTreatments = async (data) => {
  const raiz = "http://localhost:3000";

  return await axios.get(`${raiz}/treatment/findAll`, {
    headers: {
      Authorization: data,
    },
  });
};
export const getAllClinics = async (data) => {
  const raiz = "http://localhost:3000";

  return await axios.get(`${raiz}/clinic/findAll`, {
    headers: {
      Authorization: data,
    },
  });
};
export const createAppointment = async (data, appointmentData) => {
  const raiz = "http://localhost:3000";

  return await axios.post(`${raiz}/appointment/create`, appointmentData, {
    headers: {
      Authorization: data,
    },
  });
};
export const updateAppointment = async (data, appointmentUpdateData) => {
  const raiz = "http://localhost:3000";

  return await axios.put(`${raiz}/appointment/update`, appointmentUpdateData, {
    headers: {
      Authorization: data,
    },
  });
};

export const getAppointmentByDate = async (data, appointmentDate) => {
  const raiz = "http://localhost:3000";
  return await axios.post(
    `${raiz}/appointment/getAppointmentsByDate`,
    { date: appointmentDate },
    {
      headers: {
        Authorization: data,
      },
    }
  );
};

export const getAppointmentByDateUser = async (data, appointmentDate) => {
  const raiz = "http://localhost:3000";

  return await axios.post(
    `${raiz}/appointment/getAppointmentsByDateUser`,
    { date: appointmentDate },
    {
      headers: {
        Authorization: data,
      },
    }
  );
};

export const getMedicByUserId = async (data, userId) => {
  const raiz = "http://localhost:3000";

  return await axios.get(
    `${raiz}/medic/getAppointmentsByDate`,
    { userId: userId },
    {
      headers: {
        Authorization: data,
      },
    }
  );
};

export const getAllAppointmentsByMedicId = async (data) => {
  const raiz = "http://localhost:3000";
  return await axios.get(`${raiz}/appointment/getAllappointmentsByMedicId`, {
    headers: {
      Authorization: data,
    },
  });
};

export const getAllUsers = async (data) => {
  const raiz = "http://localhost:3000";

  return await axios.get(`${raiz}/user/getAllUsers`, {
    headers: {
      Authorization: data,
    },
  });
};

export const getOneAppointmentById = async (data, id) => {
  const raiz = "http://localhost:3000";

  return await axios.post(
    `${raiz}/appointment/getAppointmentById`,
    { id: id },
    {
      headers: {
        Authorization: data,
      },
    }
  );
};

export const getAllAppoitnments = async (data) => {
  const raiz = "http://localhost:3000";

  return await axios.get(`${raiz}/appointment/getAllAppointments`, {
    headers: {
      Authorization: data,
    },
  });
};
