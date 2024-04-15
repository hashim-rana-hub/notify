import React from "react";
import Input from "../Common/Input";
import CommonButton from "../Common/CommonButton";

const ForgotPassword = () => {
	return (
		<div className="formWrapper">
			<form>
				<h3>Please enter email to recover account</h3>
				<Input placeholder={"abc@gmail.com"} />
				<div className="buttonWrapper">
					<CommonButton text="Reset Password" />
				</div>
			</form>
		</div>
	);
};

export default ForgotPassword;
