import { API_URL } from "../../utils/constants";
import axios from "axios";

export const createUserCall = (payload) => {
	return axios
		.post(`${API_URL}/user/register`, payload)
		.then((res) => res?.data)
		.catch((error) => {
			throw error;
		});
};

export const getUserLoginCall = (payload) => {
	return axios
		.post(`${API_URL}/user/login`, payload)
		.then((res) => {
			sessionStorage.setItem("token", res?.data?.token);
			return res?.data;
		})
		.catch((error) => {
			throw error;
		});
};
