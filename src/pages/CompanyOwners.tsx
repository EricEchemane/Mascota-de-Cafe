import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { companyOwners } from '../api/local.data';
import globalState from '../api/context';

import Alcel from '../assets/portraits/alcel.jpg';
import Toni from '../assets/portraits/toni.jpg';
import Allaiza from '../assets/portraits/allaiza.jpg';
import Sarah from '../assets/portraits/sarah.jpg';
import Eric from '../assets/portraits/eric.jpg';

import InstagramIcon from '@material-ui/icons/Instagram';

import Owners from '../assets/illutration/ownersLandingImage.png';

export default function CompanyOwners() {
	const state = useContext<any>(globalState);

	useEffect(() => {
		scrollToTop();
		state.set_ActiveLink(-1);
	}, []);

	function scrollToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	const pictures = {
		eric: Eric,
		alcel: Alcel,
		allaiza: Allaiza,
		toni: Toni,
		sarah: Sarah,
	} as any;

	const members = companyOwners.map((owner: any, index: number) => (
		<Grid
			container
			key={index}
			className={'owner ' + (index % 2 == 0 ? '' : ' row-reverse')}>
			<Grid item xs={12} sm={5} className='image'>
				<img src={pictures[owner.id]} alt='' />
			</Grid>
			<Grid item xs={12} sm={7} className='about'>
				<h2 className='dark-2'>{owner.fullname}</h2>
				<h3 className='grey-2 mb-3'>{owner.position}</h3>
				<p>{owner.about}</p>
				<div className='mt-2 d-flex flex-align-center'>
					<InstagramIcon />
					<a href={owner.instagramAcc} target='_blank'>
						&nbsp;@
						{owner.instaName}
					</a>
				</div>
			</Grid>
		</Grid>
	));

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0.5 }}
			transition={{ duration: 0.7 }}>
			<div className='outer-w owners'>
				<p className='text-align-center mt-5'>
					<i>
						"Poeple do not buy goods and services. <br /> They buy Relations,
						Stories and Magic."
					</i>
				</p>
				<img src={Owners} alt='Mascota de Cafe Owners' />

				<h2 className='text-algin-center p-2 second'>Who are We?</h2>
				<p className='text-align-center p-2 mb-3'>
					"During college, we met each other. <br />
					With common interests, we enjoy being together. Regardless of our
					differences
					<br />
					we had founded our company."
				</p>
			</div>

			<div className='outer-g p-3'>
				<div className='owner-image-container'>{members}</div>
			</div>
		</motion.div>
	);
}
