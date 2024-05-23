import axios from "axios";

// const API_URL = "/api/user";

const register = async (formData) => {
  const response = await axios.post("https://support-api-3o68.onrender.com/api/user/", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  // console.log(da)
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post( "https://support-api-3o68.onrender.com/api/user/login", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const authService = {
  register,
  login,
};
export default authService;