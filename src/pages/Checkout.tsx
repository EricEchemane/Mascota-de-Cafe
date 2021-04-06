import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import globalState from "../api/context";

function getSteps() {
	return ["Customer Information", "Payment Options", "Place Order"];
}

export default function VerticalLinearStepper() {
	React.useEffect(() => {
		state.set_ActiveLink(5);
	}, []);

	const [activeStep, setActiveStep] = React.useState(0);
	const state = React.useContext<any>(globalState);

	function getStepContent(step: number) {
		switch (step) {
			case 0:
				return <div>HEllo</div>;
			case 1:
				return <div>HEllo</div>;
			case 2:
				return <div>HEllo</div>;
			default:
				return "Unknown step";
		}
	}

	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	function toggleLogin() {
		state.toggle_login();
	}
	function toggleSignup() {
		state.toggle_signup();
	}

	const checkOout = (
		<div className="outer-g mt-3 pt-3">
			<div className="inner pl-3 pr-3 pt-3 pb-2">
				<h2 className="bg-w p-2">Checkout</h2>
			</div>
			<div className="inner pl-3 pr-3 pb-3">
				<Stepper activeStep={activeStep} orientation="vertical">
					{steps.map((label, index) => (
						<Step key={label}>
							<StepLabel className="step-label">{label}</StepLabel>
							<StepContent>
								<div>{getStepContent(index)}</div>
								<div className="mt-2">
									<div>
										<button
											className="small click-effect"
											disabled={activeStep === 0}
											onClick={handleBack}>
											Back
										</button>
										&nbsp;
										<button className="second small" onClick={handleNext}>
											{activeStep === steps.length - 1 ? "Finish" : "Next"}
										</button>
									</div>
								</div>
							</StepContent>
						</Step>
					))}
				</Stepper>
				{activeStep === steps.length && (
					<div className="inner-w p-3">
						<p className="mb-2">All steps completed - you&apos;re finished</p>
						<Button onClick={handleReset} className="outline">
							Reset
						</Button>
					</div>
				)}
			</div>
		</div>
	);

	const unSigned = (
		<div className="outer-g mt-3 pt-3 pb-3">
			<div className="inner-w pl-3 pr-3 pt-4 pb-4">
				<h2 className="text-align-center">
					Please create or login an account to continue.
				</h2>
				<div className="d-flex flex-just-center mt-2">
					<button onClick={toggleLogin} className="small outline m-2">
						{" "}
						Log in
					</button>
					&nbsp; &nbsp;
					<button onClick={toggleSignup} className="small prime m-2">
						Sign up{" "}
					</button>
				</div>
			</div>
		</div>
	);

	return state.user_is_login ? checkOout : unSigned;
}
