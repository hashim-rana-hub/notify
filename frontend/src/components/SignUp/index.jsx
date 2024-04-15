import React, { useState } from "react";
import Input from "../Common/Input";
import CommonButton from "../Common/CommonButton";
import { Link, useNavigate } from "react-router-dom";
import DataHelpers from "../../utils/dataHelpers";
import { useFormik } from "formik";
import { signUpSchema } from "../../utils/validationSchema";
import { createUserCall } from "../services/api";
import { toast } from "react-toastify";

const SignUp = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const handleSignUpUser = async (values) => {
		try {
			setUser(values);
			await createUserCall(user);
			toast.success("Sign up Successfully");
			navigate("/");
		} catch (error) {
			toast.error(error?.message);
			console.log("error from signup ", error?.message);
		}
	};
	console.log("hello ", user);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			name: "",
		},
		validationSchema: signUpSchema,
		onSubmit: handleSignUpUser,
	});
	return (
		<div className="formWrapper">
			<form onSubmit={formik.handleSubmit}>
				<h3>SignUp</h3>
				{DataHelpers.getSignUpInputs(formik).map((inp) => (
					<div key={inp?.id}>
						<Input
							placeholder={inp?.placeHolder}
							label={inp?.lable}
							type={inp?.type}
							value={inp?.value}
							name={inp?.name}
							handleChange={formik.handleChange}
							error={formik.touched && inp?.error}
						/>
					</div>
				))}
				<div className="buttonWrapper">
					<CommonButton text="Sign Up" onClick={formik.handleSubmit} />
				</div>
				<p>
					Already have account? Click here to <Link to="/">Signin</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
