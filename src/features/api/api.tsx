import axios from "axios";

// /5UXWX7C5*BA?format=json&modelyear=2011
const API_BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

export const fetchData = async (uri: string) => {
  try {
    const response = await instance.get(uri);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
