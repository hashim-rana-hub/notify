import React, { useContext, useEffect, useState } from "react";
import Input from "../Common/Input";
import CommonButton from "../Common/CommonButton";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../../utils/validationSchema";
import DataHelpers from "../../utils/dataHelpers";
import { getUserLoginCall } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";

const SignIn = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({});
	const { user, setUser } = useContext(UserContext);
	console.log("value ", user, setUser);

	const handleSignIn = async (values) => {
		try {
			setUserData(values);
			const { user } = await getUserLoginCall(userData);
			setUser(user);
			toast.success("Welcome to notify");
		} catch (error) {
			toast.error(error.message);
			throw error;
		}
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: signInSchema,
		onSubmit: handleSignIn,
	});
	const token = sessionStorage.getItem("token");

	useEffect(() => {
		console.log("token ------ ", token);
		if (!!token) navigate("/home");
	}, [token]);

	return (
		<div className="formWrapper">
			<form>
				<h3>SignIn</h3>
				{DataHelpers.getSignInInputs(formik).map((inp) => (
					<div key={inp?.key}>
						<Input
							placeholder={inp?.placeHolder}
							label={inp?.lable}
							name={inp?.name}
							value={inp?.value}
							error={inp?.error}
							type={inp?.type}
							handleChange={formik.handleChange}
						/>
					</div>
				))}
				{/* <Input placeholder={"Enter password"} label={"Password"} /> */}
				<Link to="/forgot-password">Forgot password</Link>
				<div className="buttonWrapper">
					<CommonButton text="Signin" onClick={formik.handleSubmit} />
				</div>
				<p>
					Already have account? Click here to <Link to="/signup">Signup</Link>
				</p>
			</form>
		</div>
	);
};

export default SignIn;
