import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import react, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import { HashRouter as Router, Link } from "react-router-dom";

import Vid from "../assets/videos/Landing-Video2.mp4";
import VidPoster from "../assets/videos/features/thumbnails/landing.jpg";

import Story from "../components/Story";
import CoffeeCard from "../components/CoffeeCard";
import FeatureCard from "../components/FeatureCard";
import globalState from "../api/context";

import cp1 from "../assets/coffeePosters/cp-1.jpg";
import cp2 from "../assets/coffeePosters/cp-2.jpg";
import cp3 from "../assets/coffeePosters/cp-3.jpg";
import cp4 from "../assets/coffeePosters/cp-4.jpg";
import cp5 from "../assets/coffeePosters/cp-5.jpg";
import cp6 from "../assets/coffeePosters/cp-6.jpg";

import s1 from "../assets/stories/s1.jpg";
import s2 from "../assets/stories/s2.jpg";
import s3 from "../assets/stories/s3.jpg";
import s4 from "../assets/stories/s4.jpg";

import sp1 from "../assets/profiles/s1.jpg";
import sp2 from "../assets/profiles/s2.jpg";
import sp3 from "../assets/profiles/s3.jpg";
import sp4 from "../assets/profiles/s4.png";

import qualityIngredients from "../assets/videos/features/quality_ingredients.mp4";
import preciseProcess from "../assets/videos/features/precise_process.mp4";
import petsInHouse from "../assets/videos/features/pets_in_house.mp4";
import goodAmbience from "../assets/videos/features/good_ambience.mp4";
import goodService from "../assets/videos/features/good_service.mp4";
import adoptPet from "../assets/videos/features/adopt_pet.mp4";

import fp1 from "../assets/videos/features/thumbnails/a.jpg";
import fp2 from "../assets/videos/features/thumbnails/b.jpg";
import fp3 from "../assets/videos/features/thumbnails/c.jpg";
import fp4 from "../assets/videos/features/thumbnails/d.jpg";
import fp5 from "../assets/videos/features/thumbnails/e.jpg";
import fp6 from "../assets/videos/features/thumbnails/f.jpg";

function Homepage() {
	var state = useContext<any>(globalState);

	useEffect(() => {
		state.set_ActiveLink(0);
	}, []);

	function scrollToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	const source = {
		"cp-1": cp1,
		"cp-2": cp2,
		"cp-3": cp3,
		"cp-4": cp4,
		"cp-5": cp5,
		"cp-6": cp6,
	} as any;

	const storyImageSource = {
		s1: s1,
		s2: s2,
		s3: s3,
		s4: s4,
	} as any;

	const profilesImageSource = {
		s1: sp1,
		s2: sp2,
		s3: sp3,
		s4: sp4,
	} as any;

	const stories = state.stories.map((story: any) => (
		<Story
			title={story.title}
			name={story.name}
			branch={story.branch}
			insta={story.instagram}
			id={story.id}
			key={story.id}
			src={storyImageSource[story.id]}
			story={story.story}
			profile={profilesImageSource[story.id]}
			photoBy={story.photoBy}
		/>
	));

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0.5 }}
			transition={{ duration: 0.7 }}>
			<div className="landing-index">
				<div className="inner p-3 mb-3">
					<Grid container>
						<Grid item xs={12} md={6}>
							<Box hidden={!state.user_is_login}>
								<h3 className="second center-875px">
									Hi, {state.currentUser.username}!
								</h3>
							</Box>
							<h1 className="title1">
								Coffee and Pets <br />
								will bring you <br />
								<span className="second"> Love</span> and{" "}
								<span className="prime">Energy</span>
							</h1>

							<Box hidden={!state.user_is_login}>
								<Router>
									<Link to="/shop">
										<button className="prime mt-3">Shop now!</button>
									</Link>
								</Router>
							</Box>
							<Box hidden={state.user_is_login}>
								<p className="mt-4"> Get a 5% discount on your first visit. </p>
								<p> Sign up and join our growing community, it's free! </p>
								<button className="mt-2 prime" onClick={state.toggle_signup}>
									SIGN UP
								</button>{" "}
								&nbsp;
								<button onClick={state.toggle_login} className="mt-2 outline">
									LOG IN
								</button>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<video
								src={Vid}
								poster={VidPoster}
								className="landing-video mt-1"
								muted
								autoPlay
								loop></video>
						</Grid>
					</Grid>
				</div>

				<div className="outer-w">
					<div className="inner">
						<h1 className="prime text-align-center pt-3 title">Our Bests</h1>
					</div>
					<div className="inner pl-3 pr-3 pb-3 pt-2 dflt-width ">
						<div className="slideshow ">
							{state.coffees.map((coffee: any) => {
								return (
									<CoffeeCard
										src={source[coffee.src]}
										key={coffee.src}
										name={coffee.name}
										likes={coffee.likes}
									/>
								);
							})}
						</div>
						<Router>
							<Link to="/shop">
								<button
									onClick={scrollToTop}
									className="prime d-block m-auto mt-3">
									Shop now!
								</button>
							</Link>
						</Router>
					</div>
				</div>

				<div className="outer-w">
					<h1 className="text-align-center pt-4 title second">What we have?</h1>
					<div className="inner pb-4 pt-3 pr-3 pl-3 feature-container">
						<Grid container className="d-flex flex-just-center">
							<FeatureCard
								title="Quality Ingredients"
								video={qualityIngredients}
								poster={fp1}
								content="The ingredients used were base on our preference as a customer not as a businessman. We may have affordable products but we a sure that didn't skimp the ingredients and we use quality ingredients that make our pastry and coffee the best."
								route="/"
							/>
							<FeatureCard
								title="Precise Process"
								video={preciseProcess}
								poster={fp2}
								content="First, we make sure that everyone inside the kitchen is all sanitized and cleaned. Each of the staff has their own works and the manager is the one checking if everyone doing was right. By making our pastry we have our own recipe to follow. While in coffee we are preparing the coffee beans that were available in our menu and check if our coffee mixer and doing its job. We also check our inventory for our stocks in everything. Especially the takeout cups and bags. We always make sure that we have everything prepared to lessen our works."
								route="/"
							/>
							<FeatureCard
								title="Excellent Service"
								video={goodService}
								poster={fp3}
								content="Every member of our team has passed a customer service examination. We are confident in our ability to provide you with unwavering service and are delighted to provide you with our goods."
								route="/"
							/>
							<FeatureCard
								title="Pets in House"
								video={petsInHouse}
								poster={fp4}
								content="We have a pet's area to the right and left near the entrance to maintain cleanliness. The pets are only from the streets in our neighborhood, but we will a sure that they are clean and well-trained before they reach the cafe to prevent any problems. They also don't take food from customers because we check to see if they're full before placing them in the cafe. Also you customers can play with them in the pets area where their toys are placed."
								route="/"
							/>
							<FeatureCard
								title="Good Ambience"
								video={goodAmbience}
								poster={fp5}
								content="Our cafe was designed with the help of professionals, and all of the furniture is focused on our preferences for where customers would feel most at ease. It is important to us that our customers feel at ease so that they can focus on their jobs or studies. We want them to be in the best possible shape."
								route="/"
							/>
							<FeatureCard
								title="You can Adopt a Pet"
								video={adoptPet}
								poster={fp6}
								content="Yes, you can adopt a pet with our loyalty card. Loyalty cards have ten slots for Mascota stamps. One stamp if you reach five hundred pesos in a single bill. Fill in the loyalty card and you can adopt a pet for free, you just have to sign the pet adoption contract for you to be the official owner of the pet."
								route="/"
							/>
						</Grid>
					</div>
				</div>

				<div className="outer-g pt-1 pb-2">
					<h1 className="text-align-center pt-4 title prime">Our Stories</h1>
					{stories}
				</div>
			</div>
		</motion.div>
	);
}
export default react.memo(Homepage);
