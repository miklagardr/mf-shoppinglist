import axios from 'axios';

const apiBaseUrl ='https://shoppinglist-production.up.railway.app'

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
