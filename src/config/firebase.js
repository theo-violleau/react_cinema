// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDD5I9HgAhiQhPA4QAuonU-Cbc0Bu45mB8",
	authDomain: "react-cinema-1fb9c.firebaseapp.com",
	databaseURL:
		"https://react-cinema-1fb9c-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "react-cinema-1fb9c",
	storageBucket: "react-cinema-1fb9c.appspot.com",
	messagingSenderId: "1028097719646",
	appId: "1:1028097719646:web:77722f16eadcd7123c23cf",
	measurementId: "G-B8RMK0TPQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
