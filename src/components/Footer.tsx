import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Grid} from '@material-ui/core';

export default function Footer () {
    return <>
        <Grid container className="footer">
            <Grid item xs={12} md={3}>
                <h2>Mascota de Cafe</h2>
                <a
                    href="https://instagram.com"
                    title="Instagram"
                    rel="noreferrer"
                    target="_blank">
                    <InstagramIcon />
                </a>
                <a
                    href="https://twitter.com"
                    title="Twitter"
                    rel="noreferrer"
                    target="_blank">
                    <TwitterIcon />
                </a>
                <a
                    href="https://facebook.com"
                    title="Facebook"
                    rel="noreferrer"
                    target="_blank">
                    <FacebookIcon />
                </a>
                <a
                    href="https://linkedin.com"
                    title="Linked In"
                    rel="noreferrer"
                    target="_blank">
                    <LinkedInIcon />
                </a>
            </Grid>
            <Grid item xs={12} md={3}>
                <h3 className="p-2">Developers</h3>
                <ul>
                    <li>Eric Echemane</li>
                    <li>Mark Alcel Bautista</li>
                    <li>Toni Rose Gonzales</li>
                    <li>Allaiza Miranda</li>
                    <li>Sarah Jane Libunao</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={3}>
                <h3 className="p-2">Pages</h3>
                <ul>
                    <li><a href="">Coffee Shops</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Pets and Adoptation</a></li>
                </ul>
            </Grid>
            <Grid item xs={12} md={3}>
                <h3 className="p-2">Media Sources</h3>
                <ul>
                    <li>Pexels.com</li>
                    <li>Pinterest.com</li>
                </ul>
            </Grid>
        </Grid>
        <div className="foot">Copyright &copy;2021 Mascota de Cafe Coffee Company. All Rights Reserved</div>
    </>;
}