import axios from 'axios';

//const API_URL = 'http://localhost:4000/api';
const API_URL = 'https://api-react-2.itielsoluciones.com/api';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error desconocido' };
  }
};

export const registerUser = async (nombre, apellido, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { nombre, apellido, email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error desconocido' };
    }
  };
  