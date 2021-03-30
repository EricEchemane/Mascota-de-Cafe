import { TextField } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../assets/illutration/google-icon.png';

export default function Login() {
    const classes = "width-410 float-shadow center-fixed float-top bg-w smooth radius-8 p-3";

    return (
        <div className={classes}>
                <h2 className="prime mb-1">
                    LOG IN
                </h2>
                <hr/> 
                <div>
                    <div className="mt-3">
                        <button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
                            <img src={GoogleIcon} alt="google icon" className="icon"/>
                            <span className="ml-1">Log In with Google</span>
                        </button>
                    </div>
                    <div className="mt-1">
                        <button className="outline d-flex flex-align-center flex-just-center fullWidth-padding-minus">
                            <FacebookIcon />
                            <span className="ml-1">Log In with Facebook</span>
                        </button>
                    </div>
                    <form action="">
                        <div className="mt-3">
                            <TextField label="Fullname" fullWidth />
                        </div>
                        <div className="mt-2">
                            <TextField label="Password" type="password" fullWidth/>
                        </div>
                        <div className="mt-3">
                            <button className="prime fullWidth-padding-minus">LOG IN</button>
                        </div>
                    </form>
                    <p className="small text-align-center mt-1">
                        Forgot password? <span className="blue cur-pointer">Reset here.</span>
                    </p>
                </div>
        </div>
    )
}