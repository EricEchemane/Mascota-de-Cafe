import { TextField } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../assets/illutration/google-icon.png';
import {useContext} from 'react';
import globalState from '../api/context';

export default function Signup() {

    const state = useContext<any>(globalState);
    return (
        <div className="
            width-410
            float-shadow
            center-fixed
            float-top
            bg-w smooth
            radius-8 p-3">
          
                    <h2 className="prime text-align-center">Join our growing community for free!</h2>
                    <p className="mt-3 text-align-center">
                        We love to here about our customers.
                    </p>
                    <div className="mt-3">
                        <button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
                            <img src={GoogleIcon} alt="google icon" className="icon"/>
                            <span className="ml-1">Sign Up with Google</span>
                        </button>
                    </div>
                    <div className="mt-1">
                        <button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
                            <FacebookIcon />
                            <span className="ml-1">Sign Up with Facebook</span>
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
                            <button className="prime fullWidth-padding-minus">Sign Up</button>
                        </div>
                        <p className="text-align-center mt-1 small">
                            already have an account?
                            <span 
                                onClick={state.toggle_login}
                                className="blue cur-pointer ml-1">
                                    Log In instead.
                            </span>
                        </p>
                    </form>
        </div>
    )
}