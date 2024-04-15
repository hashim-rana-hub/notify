import React from "react";

const Input = ({
	label,
	placeholder,
	value,
	type,
	handleChange,
	name,
	error,
}) => {
	return (
		<>
			<div className="inputWrapper">
				{label && <label htmlFor={label}>{label} </label>}
				<input
					placeholder={placeholder}
					value={value}
					type={type}
					name={name}
					onChange={handleChange}
				/>
			</div>
			{error && <p>{error}</p>}
		</>
	);
};

export default Input;
