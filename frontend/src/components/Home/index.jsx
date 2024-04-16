import React, { useState } from "react";
import CommonButton from "../Common/CommonButton";
import AddNote from "../AddNote";
import { useEffect } from "react";
import { getAllNotesCall } from "../services/api";
import NotesCard from "../NotesCard.jsx";
import { useDebounce } from "../hooks/useDebounce.js";

const Home = () => {
	const [addNote, setAddNote] = useState(false);
	const [notesList, setNotesList] = useState(null);
	const [deleteNote, setDeleteNote] = useState(false);
	const [emptyError, setEmptyError] = useState(false);
	const [searchedNote, setSearchedNote] = useState("");

	const loggedInUser = localStorage.getItem("user");
	const debouncedSearch = useDebounce(searchedNote, 500);

	const getAllNotes = async () => {
		try {
			const notes = await getAllNotesCall(searchedNote);
			setNotesList(notes);
			setEmptyError("");
		} catch (error) {
			setEmptyError(error?.response?.data?.message);
			console.log("error from home ", error?.message);
		}
	};

	useEffect(() => {
		if (loggedInUser && notesList?.notes?.length == 0) setAddNote(true);

		getAllNotes();
	}, [addNote, deleteNote, debouncedSearch]);

	return (
		<div>
			<div className="addNoteWrapper">
				<CommonButton text="Add Note" onClick={() => setAddNote(true)} />
				<input
					placeholder="search notes here ..."
					value={searchedNote}
					onChange={(e) => setSearchedNote(e.target.value)}
				/>
			</div>
			{emptyError ? (
				<h1 className="emptyList">
					You have not added any notes yet, kindly add notes
				</h1>
			) : (
				<div className="cardWrapper">
					{notesList?.notes?.map((note) => (
						<NotesCard
							data={note}
							setDeleteNote={setDeleteNote}
							deleteNote={deleteNote}
						/>
					))}
				</div>
			)}
			{addNote && <AddNote setAddNote={setAddNote} />}
		</div>
	);
};

export default Home;
