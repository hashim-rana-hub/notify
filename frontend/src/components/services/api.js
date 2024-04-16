import { API_URL } from "../../utils/constants";
import axios from "axios";

export const createUserCall = (payload) => {
	return axios
		.post(`${API_URL}/user/register`, payload, {
			withCredentials: true,
		})
		.then((res) => res?.data)
		.catch((error) => {
			throw error;
		});
};

export const getUserLoginCall = (payload) => {
	return axios
		.post(`${API_URL}/user/login`, payload, {
			withCredentials: true,
		})
		.then((res) => {
			sessionStorage.setItem("token", res?.data?.token);
			return res?.data;
		})
		.catch((error) => {
			throw error;
		});
};

export const createNoteCall = (payload) => {
	return axios
		.post(`${API_URL}/note`, payload, {
			withCredentials: true,
		})
		.then((res) => res?.data)
		.catch((error) => {
			throw error;
		});
};

export const getAllNotesCall = (searchedNote = "", page = 1) => {
	return axios
		.get(`${API_URL}/note?keyword=${searchedNote}&page=${page}`, {
			withCredentials: true,
		})
		.then((res) => res?.data)
		.catch((error) => {
			throw error;
		});
};

export const deleteNoteCall = (noteId) => {
	return axios
		.delete(`${API_URL}/note/${noteId}`, {
			withCredentials: true,
		})
		.then((res) => res?.data)
		.catch((error) => {
			throw error;
		});
};
export const updateNoteCall = (noteId, payload) => {
	return axios
		.put(`${API_URL}/note/${noteId}`, payload, {
			withCredentials: true,
		})
		.then((res) => res?.data)
		.catch((error) => {
			throw error;
		});
};
