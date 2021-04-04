import TextField from '@material-ui/core/TextField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
export default function Contact() {
    return (
        <div className="contact p-3">
            <div>
                <form noValidate autoComplete="off">
                    <h2 className="mb-2">CONTACT US</h2>
                    <p className="mb-2">
                        Feel free to contact us anytime. We will get back to you as soon as possible.
                    </p>
                    <div className="pb-2">
                        <TextField id="contact-name-input" label="Name" fullWidth />
                    </div>
                    <div className="pb-2">
                        <TextField id="contact-email-input" label="E-mail" fullWidth />
                    </div>
                    <div className="pb-2">
                        <TextField id="contact-message-input" label="Message" fullWidth />
                    </div>
                    <button className="prime mt-2 fullWidth">Send</button>
                </form>
            </div>

            <div className="pl-3">
                <h2 className="mb-2 grey">INFO</h2>
                    <div>
                        <div className="pb-2 d-flex flex-align-center">
                            <MailOutlineIcon /> &nbsp; mascota@cafe.ph
                        </div>
                        <div className="pb-2 d-flex flex-align-center">
                            <PhoneIcon /> &nbsp; 951 - 45581
                        </div>
                        <div className="pb-2 d-flex flex-align-center">
                            <PhoneAndroidIcon /> &nbsp; +63 939 422 8185
                        </div>
                    </div>
                <div id="contacts-social">
                    <h2 className="mb-2 mt-2 grey">SOCIAL MEDIA</h2>
                    <div>
                            <div className="pb-2 d-flex flex-align-center">
                                <InstagramIcon /> &nbsp; @mascotadecafePH
                            </div>
                            <div className="pb-2 d-flex flex-align-center">
                                <FacebookIcon /> &nbsp; /mascotadecafe
                            </div>
                            <div className="pb-2 d-flex flex-align-center">
                                <TwitterIcon /> &nbsp; /mascotadecafe
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
