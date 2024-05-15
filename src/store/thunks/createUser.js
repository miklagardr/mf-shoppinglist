import axios from 'axios';
import { apiBaseUrl } from '../../apiBaseUrl';


export const createUser = async (Username,Email,Password,Membership) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/user/createUser`, {
      Username,
      Email,
      Password,
      Membership,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
