import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "../assets/illutration/google-icon.png";
import { useContext } from "react";
import globalState from "../api/context";
import { useRef, useState } from "react";

export default function Signup({ setUserLoginProps, setStateProp }: any) {
	const usernameRef = useRef<any>("");
	const emailRef = useRef<any>("");
	const passwordRef = useRef<any>("");

	const [usernameInput, setUsernameInput] = useState({
		label: "A username",
		error: false,
	});
	const [emailInput, setEmailInput] = useState({
		label: "E-mail",
		error: false,
	});
	const [passwordInput, setPasswordInput] = useState({
		label: "Password",
		error: false,
	});

	function handleFullnameChange(event: any) {
		const value = event.target.value;
		usernameRef.current = value;
	}
	function handleEmailChange(event: any) {
		const value = event.target.value;
		emailRef.current = value;
	}
	function handlePasswordChange(event: any) {
		const value = event.target.value;
		passwordRef.current = value;
	}

	function isValid() {
		const validUSername = usernameRef.current.trim().length;
		const hasEmail = emailRef.current.trim().length;
		const validEmail = validateEmail(emailRef.current.trim());
		const hasPassword = passwordRef.current.trim().length;
		const strongPassword = passwordRef.current.trim().length >= 8;

		if (!validUSername)
			setUsernameInput({ label: "Username is required", error: true });
		else setUsernameInput({ label: "A username", error: false });

		if (!hasEmail) setEmailInput({ label: "Email is required", error: true });
		else if (!validEmail)
			setEmailInput({ label: "Invalid e-mail address", error: true });
		else setEmailInput({ label: "E-mail", error: false });

		if (!hasPassword)
			setPasswordInput({ label: "Password is required", error: true });
		else if (!strongPassword)
			setPasswordInput({ label: "Password is too short", error: true });
		else setPasswordInput({ label: "Password", error: false });

		return (
			validUSername && hasEmail && validEmail && hasPassword && strongPassword
		);
	}

	function handleSave() {
		if (isValid()) {
			const newUSer = {
				username: usernameRef.current,
				email: emailRef.current,
				password: passwordRef.current,
			};

			localStorage.setItem("MDC_user", JSON.stringify(newUSer));

			setStateProp((prev: any) => {
				return {
					...prev,
					currentUser: newUSer,
				};
			});
			setUserLoginProps(true);
			window.location.reload();
		}
	}

	function validateEmail(email: string) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	const rootClasses =
		"width-410 float-shadow center-fixed float-top bg-w smooth radius-8 p-3";
	const state = useContext<any>(globalState);

	return (
		<div className={rootClasses}>
			<h2 className="prime text-align-center">
				Join our growing community for free!
			</h2>
			<p className="mt-3 text-align-center">
				We love to here about our customers.
			</p>
			<div className="mt-3">
				<button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
					<img src={GoogleIcon} alt="google icon" className="icon" />
					<span className="ml-1">Sign Up with Google</span>
				</button>
			</div>
			<div className="mt-1">
				<button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
					<FacebookIcon />
					<span className="ml-1">Sign Up with Facebook</span>
				</button>
			</div>

			<div className="mt-3">
				<div className="mb-2">
					<TextField
						error={usernameInput.error}
						label={usernameInput.label}
						className="fullWidth"
						onInput={handleFullnameChange}
					/>
				</div>
				<div className="mb-2">
					<TextField
						error={emailInput.error}
						label={emailInput.label}
						className="fullWidth"
						onInput={handleEmailChange}
					/>
				</div>
				<div className="mb-3">
					<TextField
						error={passwordInput.error}
						label={passwordInput.label}
						type="password"
						className="fullWidth"
						onInput={handlePasswordChange}
					/>
				</div>
				<div className="mb-2">
					<button
						onClick={handleSave}
						className="prime fullWidth-padding-minus">
						Save
					</button>
				</div>
				<p className="text-align-center mt-1 small">
					already have an account?
					<span onClick={state.toggle_login} className="blue cur-pointer ml-1">
						Log In instead.
					</span>
				</p>
			</div>
		</div>
	);
}
