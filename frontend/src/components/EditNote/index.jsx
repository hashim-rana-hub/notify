import { useFormik } from "formik";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Input from "../Common/Input";
import { addNoteSchema } from "../../utils/validationSchema";
import CommonButton from "../Common/CommonButton";
import { updateNoteCall } from "../services/api";
import { toast } from "react-toastify";

const EditNote = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const prevData = location.state.userData;

	const handleNoteUpdate = async (values) => {
		try {
			await updateNoteCall(prevData?._id, values);
			toast.success("Updated Successfully");
			navigate(-1);
		} catch (error) {}
	};

	const formik = useFormik({
		initialValues: {
			note: prevData?.note,
		},
		validationSchema: addNoteSchema,
		onSubmit: handleNoteUpdate,
	});
	return (
		<div>
			<form>
				<h1>Edit Your Note</h1>
				<Input isDisabled value={location.state.userData.createdAt} />
				<Input
					placeholder={prevData}
					name="note"
					value={formik.values.note}
					handleChange={formik.handleChange}
				/>
				<CommonButton text="Update Note" onClick={formik.handleSubmit} />
			</form>
		</div>
	);
};

export default EditNote;
