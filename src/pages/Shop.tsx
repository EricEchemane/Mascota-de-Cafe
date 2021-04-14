import { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { motion } from "framer-motion";

import s4 from "../assets/stories/s4.jpg";
import { coffeeProducts as CF, pastries as PST } from "../api/local.data";
import CoffeeProduct from "../components/CoffeeProduct";
import globalState from "../api/context";
// photos (Coffee)
import cp1 from "../assets/coffeeProducts/cp-1.png";
import cp2 from "../assets/coffeeProducts/cp-2.png";
import cp3 from "../assets/coffeeProducts/cp-3.png";
import cp4 from "../assets/coffeeProducts/cp-4.png";
import cp5 from "../assets/coffeeProducts/cp-5.png";
import cp6 from "../assets/coffeeProducts/cp-6.png";
// photos (Pastry)
import p1 from "../assets/pastry/pastry1.png";
import p2 from "../assets/pastry/pastry2.png";
import p3 from "../assets/pastry/pastry3.png";
import p4 from "../assets/pastry/pastry4.png";
import p5 from "../assets/pastry/pastry5.png";
import p6 from "../assets/pastry/pastry6.png";

function Alert(props: any) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Shop() {
	const state = useContext<any>(globalState);

	useEffect(() => {
		state.set_ActiveLink(2);
	}, []);

	const rootClasses = "outer-g";
	const [activeTab, set_activeTab] = useState(0);

	const [open, setOpen] = useState(false);
	const [openA, setOpenA] = useState(false);

	const handleClick = (
		itemID: string,
		itemName: string,
		itemPrice: number,
		itemDesc: string
	) => {
		if (itemIsOnTheCart(itemID)) {
			setOpenA(true);
			return;
		}
		state.addCart(itemID, itemName, itemPrice, itemDesc);
		setOpen(true);
	};
	function itemIsOnTheCart(_id: string) {
		for (const each of state.cart_items) {
			if (_id === each.id) return true;
		}
		return false;
	}
	const handleClose = (event: any, reason: any) => {
		if (reason === "clickaway") return;
		setOpen(false);
	};
	const handleCloseA = (event: any, reason: any) => {
		if (reason === "clickaway") return;
		setOpenA(false);
	};
	const coffeePosters = {
		"cp-1": cp1,
		"cp-2": cp2,
		"cp-3": cp3,
		"cp-4": cp4,
		"cp-5": cp5,
		"cp-6": cp6,
	} as any;
	const pastryPosters = {
		pastry1: p1,
		pastry2: p2,
		pastry3: p3,
		pastry4: p4,
		pastry5: p5,
		pastry6: p6,
	} as any;
	const coffeeProducts = CF.map((each: any) => (
		<CoffeeProduct
			imgSrc={coffeePosters[each.id]}
			id={each.id}
			key={each.id}
			handleAddToCart={handleClick}
			name={each.name}
			desc={each.desc}
			rating={each.rating}
			price={each.price}
		/>
	));
	const pastries = PST.map((each: any) => (
		<CoffeeProduct
			imgSrc={pastryPosters[each.id]}
			id={each.id}
			key={each.id}
			handleAddToCart={handleClick}
			name={each.name}
			desc={each.desc}
			rating={each.rating}
			price={each.price}
		/>
	));
	return (
		<motion.div
			className={rootClasses}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0.5 }}
			transition={{ duration: 0.7 }}>
			<div className="inner">
				<Grid container>
					<Grid item xs={12} md={5}>
						<h3 className="pt-5 pl-3 second center-875px">
							{state.user_is_login ? `Hi, ${state.currentUser.username}!` : ""}
						</h3>
						<h1 className="pt-1 pl-3 title center-875px">
							Let's share <br />
							<span className="prime">
								Experiences <br /> Together.
							</span>
						</h1>
						<p className="pl-3 pt-3 pb-3 center-875px">
							<cite>
								Photo on the right/below: <br />
								Scene from Filinvest City Branch <br />
								March 29, 2021 <br />
								Sunday | 2:00 PM
							</cite>
						</p>
					</Grid>
					<Grid item xs={12} md={7} className="pr-3 pt-3 pad-0-875px">
						<img src={s4} className="fullWidth fullHeight" alt="Coffee table" />
					</Grid>
				</Grid>
			</div>

			<div className="outer-w">
				<div className="inner pl-3 pt-4 mb-1">
					<div className="flex-1">
						<button
							onClick={() => {
								set_activeTab(0);
							}}
							className={"small" + (activeTab !== 0 ? "" : " active-btn")}>
							Coffee
						</button>
						<button
							onClick={() => {
								set_activeTab(1);
							}}
							className={"small" + (activeTab !== 1 ? "" : " active-btn")}>
							Pastry
						</button>
					</div>
				</div>
				<div className="inner pad-0-875px pb-4 no-overflow">
					<Grid container>
						{activeTab === 0 ? coffeeProducts : pastries}
						{activeTab === 0 ? coffeeProducts : pastries}
					</Grid>
				</div>
			</div>

			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				className="all-white width-auto">
				<Alert onClose={handleClose} severity="success">
					Item successfully added to cart.
				</Alert>
			</Snackbar>
			<Snackbar
				open={openA}
				autoHideDuration={3000}
				onClose={handleCloseA}
				className="all-white width-auto">
				<Alert onClose={handleCloseA} severity="warning">
					This Item is already in the cart.
				</Alert>
			</Snackbar>
		</motion.div>
	);
}
