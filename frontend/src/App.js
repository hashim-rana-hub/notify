import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header.jsx";
import SignUp from "./components/SignUp/index.jsx";
import SignIn from "./components/Signin/index.jsx";
import Home from "./components/Home/index.jsx";
import { createContext, useState } from "react";
import { UserContext } from "./context/userContext.js";
import EditNote from "./components/EditNote/index.jsx";

function App() {
	const [user, setUser] = useState();

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Router>
				<Header />
				<Routes>
					<Route path="/signup/" element={<SignUp />} />
					<Route path="/" element={<SignIn />} />
					{/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
					<Route path="/home" element={<Home />} />
					<Route path="/edit/:id" element={<EditNote />} />
					{/* 
        <Route path="/notes" element={<PrivateRoute />}>
          <Route path="/notes" element={<NotesScreen />} />
        </Route>
        <Route path="/note-detail" element={<PrivateRoute />}>
          <Route path="/note-detail" element={<NoteDetails />} />
        </Route>
        <Route
          path="/api/v1/user/reset/password/:token"
          element={<ResetPassword />}
        /> */}
				</Routes>
				<ToastContainer />
			</Router>
		</UserContext.Provider>
	);
}

export default App;
