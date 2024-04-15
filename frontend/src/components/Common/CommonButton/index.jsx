import React from "react";

const CommonButton = ({ text, onClick, type }) => (
	<button className="btn btn-primary" onClick={onClick} type={type || "button"}>
		{text}
	</button>
);

export default CommonButton;
