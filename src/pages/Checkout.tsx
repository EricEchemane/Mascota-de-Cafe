import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Grid from "@material-ui/core/Grid";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import globalState from "../api/context";
import CustomSelect from "../components/CustomSelect";

function getSteps() {
	return ["Customer Information", "Payment Options", "Place Order"];
}

export default function VerticalLinearStepper() {
	React.useEffect(() => {
		state.set_ActiveLink(5);
		scrollTop();
	}, []);

	const [activeStep, setActiveStep] = React.useState(0);
	const [deliver, setDeliver] = React.useState(true);
	const state = React.useContext<any>(globalState);

	const customerInformation = (
		<Grid container>
			<Grid item xs={12} md={6}>
				<div className="mb-3 mt-2">
					<p className="mb-2">Your name:</p>
					<TextField label="First name" required variant="outlined" /> &nbsp;
					<TextField label="Last name" required variant="outlined" />
				</div>
				<div className="mb-3 mt-2">
					<p className="mb-2">Contact Info:</p>
					<TextField label="Mobile number" required variant="outlined" /> &nbsp;
					<TextField label="E-mail" required variant="outlined" />
				</div>
			</Grid>
			<Grid item xs={12} md={6}>
				<div className="mt-2">
					<p className="mb-2">Address:</p>
					<TextField label="House number" required variant="outlined" /> &nbsp;
					<TextField label="Street" required variant="outlined" /> <br /> <br />
					<TextField
						label="Subdivision / Village"
						required
						variant="outlined"
					/>{" "}
					&nbsp;
					<TextField label="Barangay" required variant="outlined" /> <br />{" "}
					<br />
					<div className="pr-3 mr-3">
						<CustomSelect
							name={"City"}
							defaultValue={""}
							options={[
								"Muntinlupa City",
								"Las Piñas City",
								"Manila City",
								"Pasay City",
							]}
						/>
					</div>
				</div>
			</Grid>
		</Grid>
	);

	const paymentOptions = (
		<div>
			<div className="mb-2 mt-2">
				<p className="mb-2">Choose method:</p>
				<input
					type="radio"
					name="payment"
					className="cur-pointer"
					checked={deliver}
					onChange={() => {
						setDeliver(true);
					}}
				/>
				&nbsp; Cash on Delivery &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input
					type="radio"
					name="payment"
					className="cur-pointer"
					checked={!deliver}
					onChange={() => {
						setDeliver(false);
					}}
				/>
				&nbsp; Pay and Claim
			</div>
			{deliver ? (
				<div className="mb-3 pt-2">
					<CustomSelect
						name={"Type of Establishment"}
						defaultValue={""}
						options={["Home", "Office"]}
					/>
				</div>
			) : (
				<div className="mb-3 pt-2">
					<TextField variant="outlined" label="Card number" required /> &nbsp;
					<TextField variant="outlined" label="Name on Card" required /> &nbsp;
					<TextField
						variant="outlined"
						label="Expiration (MM/YYYY)"
						required
					/>{" "}
					&nbsp;
				</div>
			)}
		</div>
	);

	const placeOrder = (
		<div>
			<div className="pt-1 pb-1 d-flex">
				<p className="flex-1">
					Subtotal Price ({state.cart_items.length} items)
				</p>
				<h4 className="prime"> $ {state.total_price}.00 </h4>
			</div>
			<div className="pt-1 pb-1 d-flex">
				<p className="flex-1">Shipping Fee</p>
				<h4 className="prime"> $ {deliver ? 50 : 0}.00 </h4>
			</div>
			<div className="pt-2 pb-2 d-flex">
				<h3 className="flex-1">Total Amount</h3>
				<h3 className="second"> $ {state.total_price + 50}.00 </h3>
			</div>
		</div>
	);

	function scrollTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	function getStepContent(step: number) {
		switch (step) {
			case 0:
				return customerInformation;
			case 1:
				return paymentOptions;
			case 2:
				return placeOrder;
			default:
				return "Unknown step";
		}
	}

	const steps = getSteps();

	const handleNext = () => {
		scrollTop();
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
			<div className="inner pl-3 pr-3 pt-3 pb-2 pad-x-1">
				<h2 className="bg-w p-2">Check Out</h2>
			</div>
			<div className="inner pl-3 pr-3 pb-3 pad-x-1">
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
											{activeStep === steps.length - 1 ? "Place Order" : "Next"}
										</button>
									</div>
								</div>
							</StepContent>
						</Step>
					))}
				</Stepper>
				{activeStep === steps.length && (
					<div className="inner-w pl-3 pb-3">
						<p className="mb-2">All steps completed - you&apos;re finished</p>
						<p className="mb-2">Please wait for the confirmation.</p>
						<Button onClick={handleReset} className="outline">
							Track Order
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
				<div className="d-flex flex-just-center mt-3">
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
