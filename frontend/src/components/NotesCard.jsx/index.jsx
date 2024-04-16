import React from "react";
import { deleteNoteCall, updateNoteCall } from "../services/api";
import { toast } from "react-toastify";
import Edit from "../../assets/edit.png";
import Delete from "../../assets/delete.png";
import { useNavigate } from "react-router-dom";

const NotesCard = ({ data, setDeleteNote, deleteNote }) => {
	const navigate = useNavigate();

	const deleteUserNote = async (noteId) => {
		try {
			await deleteNoteCall(noteId);
			setDeleteNote(!deleteNote);
			toast.success("Note deleted successfully...");
		} catch (error) {
			toast.error(error?.message);
		}
	};

	const editUserNote = (data) => {
		navigate(`/edit/${data._id}`, { state: { userData: data } });
	};

	return (
		<div className="card" key={data?._id}>
			<div className="cardHeader">
				<h3>{data?.note}</h3>
				<div className="flexCenter" style={{ gap: "1rem" }}>
					<icon className="flexCenter" onClick={() => editUserNote(data)}>
						<img src={Edit} />
					</icon>
					<icon
						className="flexCenter"
						onClick={() => deleteUserNote(data?._id)}
					>
						<img src={Delete} />
					</icon>
				</div>
			</div>
			<p>{data?.createdAt}</p>
		</div>
	);
};

export default NotesCard;
