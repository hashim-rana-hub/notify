export default class DataHelpers {
	static getSignInInputs(formik) {
		return [
			{
				id: 1,
				name: "email",
				lable: "Email",
				value: formik.values.email,
				type: "email",
				placeHolder: "Enter your email",
				error: formik.errors.email,
			},
			{
				id: 2,
				name: "password",
				lable: "Password",
				value: formik.values.password,
				type: "password",
				placeHolder: "Enter your password",
				error: formik.errors.password,
			},
		];
	}
	static getSignUpInputs(formik) {
		return [
			{
				id: 1,
				name: "name",
				lable: "Full Name",
				value: formik.values.name,
				type: "text",
				placeHolder: "Enter your full name",
				error: formik.errors.name,
			},
			{
				id: 2,
				name: "email",
				lable: "Email",
				value: formik.values.email,
				type: "email",
				placeHolder: "Enter your email",
				error: formik.errors.email,
			},
			{
				id: 3,
				name: "password",
				lable: "Password",
				value: formik.values.password,
				type: "password",
				placeHolder: "Enter your password",
				error: formik.errors.password,
			},
		];
	}
}
