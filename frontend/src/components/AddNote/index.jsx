import React, { useState } from "react";
import CommonButton from "../Common/CommonButton";
import { useFormik } from "formik";
import { addNoteSchema } from "../../utils/validationSchema";
import { createNoteCall } from "../services/api";
import { toast } from "react-toastify";

const AddNote = ({ setAddNote }) => {
	const handleCreateNote = async (values) => {
		try {
			await createNoteCall(values);
			setAddNote(false);
			toast.success("Successfully created note's ...");
		} catch (error) {
			toast.error(error?.message);
			throw error;
		}
	};

	const formik = useFormik({
		initialValues: {
			note: "",
		},
		validationSchema: addNoteSchema,
		onSubmit: handleCreateNote,
	});

	return (
		<div className="addNoteFormWrapper">
			<form>
				<h2>Create Your Note</h2>
				<textarea
					onChange={formik.handleChange}
					value={formik.values.noteText}
					name="note"
				/>
				<CommonButton text="Create Note" onClick={formik.handleSubmit} />
			</form>
		</div>
	);
};

export default AddNote;
