import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Grid from "@material-ui/core/Grid";

export default function Footer() {
	return (
		<>
			<Grid container className="footer">
				<Grid item xs={12} md={3} className="footer-section-1">
					<h2>Mascota de Cafe</h2>
					<div className="social-media-icons">
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
						<a
							href="https://mail.google.com"
							title="Email"
							rel="noreferrer"
							target="_blank">
							<EmailIcon />
						</a>
						<a
							href="https://mail.google.com"
							title="981-4221"
							rel="noreferrer"
							target="_blank">
							<PhoneIcon />
						</a>
					</div>
					<div className="pl-1 pt-3">
						<input
							list="search"
							placeholder="Search "
							type="search"
							className="search-input"
						/>
						<datalist id="search">
							<option value="Products">Products</option>
							<option value="Coffees">Coffees</option>
							<option value="Coffee Shops">Coffee Shops</option>
							<option value="Pets">Pets</option>
							<option value="Adopt a pet">Adopt a pet</option>
							<option value="Pet adoptation">Pet adoptation</option>
							<option value="Find nearset shop">Find nearset shop</option>
						</datalist>
					</div>
				</Grid>
				<Grid item xs={12} md={3}>
					<h3 className="p-2">Partners</h3>
					<ul>
						<li>
							<a href="https://www.facebook.com/e.echemane" target="_blank">
								Eric Echemane
							</a>
						</li>

						<li>
							<a
								href="https://www.facebook.com/alcelbautista26"
								target="_blank">
								Mark Alcel Bautista
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/Aziablck" target="_blank">
								Allaiza Miranda
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/toni.gonzales15"
								target="_blank">
								Toni Rose Gonzales
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/sarahjane.libunao.56"
								target="_blank">
								Sarah Jane Libunao
							</a>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} md={3}>
					<h3 className="p-2">Pages</h3>
					<ul>
						<li>
							<a href="https://facebook.com">Coffee Shops</a>
						</li>
						<li>
							<a href="https://facebook.com">Products</a>
						</li>
						<li>
							<a href="https://facebook.com">Pets and Adoptation</a>
						</li>
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
			<div className="foot">
				Copyright &copy;2021 Mascota de Cafe Coffee Company. All Rights Reserved
			</div>
		</>
	);
}
