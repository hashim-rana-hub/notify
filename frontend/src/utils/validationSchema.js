import * as Yup from "yup";

export const signUpSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
	password: Yup.string().required("password is required"),
	name: Yup.string().required("Name is required"),
});

export const signInSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
	password: Yup.string().required("password is required"),
});

export const addNoteSchema = Yup.object({
	note: Yup.string().required("This field should't be empty."),
});
