import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseApp = initializeApp(firebaseConfig);

const Login1 = () => {
	const auth = getAuth(firebaseApp);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		firebase
			.auth()
			.signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				// Sign in successful
			})
			.catch((error) => {
				setError(error.message);
				console.log(error);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<button type="submit">Sign In</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	);
};

export default Login1;
