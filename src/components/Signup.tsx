import { TextField } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../assets/illutration/google-icon.png';

export default function Signup() {

    return (
        <div className="
            width-410
            float-shadow
            center-fixed
            float-top
            bg-w smooth
            radius-8 p-3">
          
                    <h2 className="prime">Sign Up</h2>
                    <p className="mt-1">
                        Join our growing community for free. <br />
                        We love to here about our customers.
                    </p>
                    <div className="mt-3">
                        <button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
                            <img src={GoogleIcon} alt="google icon" className="icon"/>
                            <span className="ml-1">Sign up with Google</span>
                        </button>
                    </div>
                    <div className="mt-1">
                        <button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
                            <FacebookIcon />
                            <span className="ml-1">Sign up with Facebook</span>
                        </button>
                    </div>

                    <form action="" className="mt-3">
                        <div className="mb-2">
                            <TextField label="Full Name" className="fullWidth" />
                        </div>
                        <div className="mb-2">
                            <TextField label="E-mail" className="fullWidth" />
                        </div>
                        <div className="mb-3">
                            <TextField label="Password" type="password" className="fullWidth" />
                        </div>
                        <div className="mb-2">
                            <button className="prime fullWidth-padding-minus">SIGN UP</button>
                        </div>
                        <p className="text-align-center mb-2">Forgot password? <span className="blue cur-pointer">Reset here</span> </p>
                        <hr/>
                        <p className="text-align-center">
                            already have an account?
                            <span className="blue cur-pointer ml-1">Sign In instead.</span>
                        </p>
                    </form>
        </div>
    )
}