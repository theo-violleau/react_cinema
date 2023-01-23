import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import AuthDetails from "../components/AuthDetails";

function App() {
	return (
		<div className="Login">
			<SignIn />
			<SignUp />
			<AuthDetails />
		</div>
	);
}
export default Login;
