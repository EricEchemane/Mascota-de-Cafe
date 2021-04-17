import { useEffect, useContext } from "react";
import globalState from "../api/context";
import { motion } from "framer-motion";
import Grid from "@material-ui/core/Grid";
import s2 from "../assets/stories/s2.jpg";
import { pets } from "../api/local.data";
import PetCard from "../components/PetCard";

import billy from "../assets/pets/billy.png";
import bully from "../assets/pets/bully.png";
import flute from "../assets/pets/flute.png";
import happy from "../assets/pets/happy.png";
import jenny from "../assets/pets/jenny.png";
import rose from "../assets/pets/rose.png";
import shaky from "../assets/pets/shaky.png";
import shana from "../assets/pets/shana.png";
import shyne from "../assets/pets/shyne.png";
import stuart from "../assets/pets/stuart.png";

const petMap = {
	Hemmings: billy,
	Toyama: bully,
	Prince: flute,
	Jade: happy,
	Glister: jenny,
	Matt: rose,
	Oreo: shaky,
	Shana: shana,
	Mallow: shyne,
	Milo: stuart,
} as any;

export default function Pets() {
	const state = useContext<any>(globalState);
	useEffect(() => {
		state.set_ActiveLink(3);
	}, []);

	const petCards = pets.map((each: any) => (
		<PetCard
			sex={each.sex}
			imageSrc={petMap[each.name]}
			key={each.name}
			type={each.type}
			breed={each.breed}
			content={each.about}
			name={each.name}
		/>
	));

	return (
		<motion.div
			className="outer-g"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0.5 }}
			transition={{ duration: 0.7 }}>
			<div className="inner pl-3 pr-3 pt-3">
				<Grid container>
					<Grid item xs={12} md={6}>
						<h1 className="pt-5 center-875px pb-3">
							<span className="prime">Meet</span> new
							<span className="second"> Friends</span> <br />
							and play with them.
						</h1>
						<p className="center-875px pb-2">
							Play with our pets while having Coffee. It's free! <br />
							You can adopt pets if you want to.
						</p>
						<button className="prime center-btn-875px mb-3">Learn more!</button>
					</Grid>
					<Grid item xs={12} md={6}>
						<img src={s2} alt="Dog" className="fullWidth fullHeight pt-2" />
					</Grid>
				</Grid>
			</div>

			<div className="outer-w pt-4">
				<div className="inner pl-3">
					<h2>Visit us and let's play!</h2>
				</div>
				<Grid container className="inner">
					{petCards}
				</Grid>
			</div>
		</motion.div>
	);
}
