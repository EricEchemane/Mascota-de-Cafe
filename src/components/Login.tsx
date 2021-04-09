import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "../assets/illutration/google-icon.png";
import { useRef, useState } from "react";

export default function Login({
	dim,
	setUserLoginProps,
	localData,
	setStateProp,
}: any) {
	const usernameRef = useRef("");
	const passwordRef = useRef("");

	const [usernameInput, setUsernameInput] = useState({
		label: "Username",
		error: false,
	});

	const [passwordInput, setPasswordInput] = useState({
		label: "Password",
		error: false,
	});

	function handleUsernameInput(event: any) {
		const value = event.target.value;
		usernameRef.current = value;
	}
	function handlePasswordInput(event: any) {
		const value = event.target.value;
		passwordRef.current = value;
	}

	function isValid() {
		const wrongUsername = usernameRef.current !== localData.username;
		const wrongPassword = passwordRef.current !== localData.password;
		if (wrongUsername)
			setUsernameInput({ label: "Username doesn't exist", error: true });
		else setUsernameInput({ label: "Username", error: false });

		if (wrongPassword)
			setPasswordInput({ label: "Incorrect password", error: true });
		else setPasswordInput({ label: "Password", error: false });

		return !wrongUsername && !wrongPassword;
	}

	function handleLogin() {
		if (isValid()) {
			const newUser = {
				username: localData.username,
				password: localData.password,
			};

			localStorage.setItem("MDC_user", JSON.stringify(newUser));

			setStateProp((prev: any) => {
				return {
					...prev,
					currentUser: newUser,
				};
			});
			setUserLoginProps(true);
			window.location.reload();
		}
	}

	const classes =
		"width-410 float-shadow center-fixed float-top bg-w smooth radius-8 p-3";
	return (
		<div className={classes}>
			<h2 className="prime mb-1">LOG IN</h2>
			<hr />
			<div>
				<div className="mt-3">
					<button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
						<img src={GoogleIcon} alt="google icon" className="icon" />
						<span className="ml-1">Log In with Google</span>
					</button>
				</div>
				<div className="mt-1">
					<button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
						<FacebookIcon />
						<span className="ml-1">Log In with Facebook</span>
					</button>
				</div>
				<div>
					<div className="mt-3">
						<TextField
							onInput={handleUsernameInput}
							error={usernameInput.error}
							label={usernameInput.label}
							fullWidth
						/>
					</div>
					<div className="mt-2">
						<TextField
							onInput={handlePasswordInput}
							error={passwordInput.error}
							label={passwordInput.label}
							type="password"
							fullWidth
						/>
					</div>
					<div className="mt-3">
						<button
							onClick={handleLogin}
							className="prime fullWidth-padding-minus">
							LOG IN
						</button>
					</div>
					<p className="text-align-center mt-2">
						Forgot password?{" "}
						<span className="blue cur-pointer">Reset here.</span>
					</p>
				</div>
			</div>
		</div>
	);
}
