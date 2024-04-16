import React from "react";
import { deleteNoteCall } from "../services/api";
import { toast } from "react-toastify";

const NotesCard = ({ data, setDeleteNote, deleteNote }) => {
	const deleteUserNote = async (noteId) => {
		try {
			await deleteNoteCall(noteId);
			setDeleteNote(!deleteNote);
			toast.success("Note deleted successfully...");
		} catch (error) {
			toast.error(error?.message);
		}
	};

	return (
		<div className="card" key={data?._id}>
			<div className="cardHeader">
				<h3>{data?.note}</h3>
				<a className="flexCenter" onClick={() => deleteUserNote(data?._id)}>
					delete
				</a>
			</div>
			<p>{data?.createdAt}</p>
		</div>
	);
};

export default NotesCard;
