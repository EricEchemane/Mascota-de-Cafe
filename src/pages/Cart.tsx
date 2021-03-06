import { useContext, useEffect, useState, useRef } from "react";
import globalState from "../api/context";
import Tooltip from "@material-ui/core/Tooltip";
import { HashRouter as Router, Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import ConfirmDialog from "../components/ConfirmDialog";

// photos (Coffee)
import cp1 from "../assets/coffeeProducts/cp-1.png";
import cp2 from "../assets/coffeeProducts/cp-2.png";
import cp3 from "../assets/coffeeProducts/cp-3.png";
import cp4 from "../assets/coffeeProducts/cp-4.png";
import cp5 from "../assets/coffeeProducts/cp-5.png";
import cp6 from "../assets/coffeeProducts/cp-6.png";
import cp7 from "../assets/coffeeProducts/cp-7.png";
import cp8 from "../assets/coffeeProducts/cp-8.png";
import cp9 from "../assets/coffeeProducts/cp-9.png";
import cp10 from "../assets/coffeeProducts/cp-10.png";
import cp11 from "../assets/coffeeProducts/cp-11.png";
import cp12 from "../assets/coffeeProducts/cp-12.png";
// photos (Pastry)
import p1 from "../assets/pastry/ChocolateFudgeWaffle.jpg";
import p2 from "../assets/pastry/ChocoWaferBars.jpg";
import p3 from "../assets/pastry/ClassicCroissant.jpg";
import p4 from "../assets/pastry/Macaroons.jpg";
import p5 from "../assets/pastry/ChocolateChipCookies.jpg";
import p6 from "../assets/pastry/ChocolateBrownies.jpg";
import p7 from "../assets/pastry/BlueberryCheesecake.jpg";
import p8 from "../assets/pastry/StrawberryCheesecake.jpg";
import p9 from "../assets/pastry/CinnamonRolls.jpg";
import p10 from "../assets/pastry/FrenchToast.jpg";
import p11 from "../assets/pastry/WhiteChocolateAndCranberryCookie.jpg";
import p12 from "../assets/pastry/SmoresBar.jpg";
import p13 from "../assets/pastry/BananaLoaf.jpg";
import p14 from "../assets/pastry/UbeCheesecake.jpg";
import p15 from "../assets/pastry/OriginalGlazeDonuts.jpg";
import p16 from "../assets/pastry/ChocolateDonuts.jpg";
import p17 from "../assets/pastry/Pancake.jpg";
import p18 from "../assets/pastry/MatchaDonuts.jpg";
import p19 from "../assets/pastry/StrawberryDonuts.jpg";

export default function Cart() {
	useEffect(() => {
		state.set_ActiveLink(5);
	}, []);

	const state = useContext<any>(globalState);
	const rootClasses = "outer-w mt-4 mb-2";
	const commonClass = "pl-3 pr-3 pt-2 pb-2 mt-1 pad-x-1";
	const [openConfirmation, setOpenConfirmation] = useState(false);
	const idTobeDelete = useRef<string>("");

	function handleOpen(id: string) {
		idTobeDelete.current = id;
		setOpenConfirmation(true);
	}
	function handleYes(_id: string) {
		removeITem(idTobeDelete.current);
		setOpenConfirmation(false);
	}
	function handleNo() {
		setOpenConfirmation(false);
	}

	const items = state.cart_items;

	const coffeePosters = {
		"cp-1": cp1,
		"cp-2": cp2,
		"cp-3": cp3,
		"cp-4": cp4,
		"cp-5": cp5,
		"cp-6": cp6,
		"cp-7": cp7,
		"cp-8": cp8,
		"cp-9": cp9,
		"cp-10": cp10,
		"cp-11": cp11,
		"cp-12": cp12,
	} as any;

	const pastryPosters = {
		pastry1: p1,
		pastry2: p2,
		pastry3: p3,
		pastry4: p4,
		pastry5: p5,
		pastry6: p6,
		pastry7: p7,
		pastry8: p8,
		pastry9: p9,
		pastry10: p10,
		pastry11: p11,
		pastry12: p12,
		pastry13: p13,
		pastry14: p14,
		pastry15: p15,
		pastry16: p16,
		pastry17: p17,
		pastry18: p18,
		pastry19: p19,
	} as any;

	function handleQuantityUpdate(id: number, n: number) {
		const itemsCopy = items.slice();
		for (const each of itemsCopy) {
			if (each.id === id) {
				const newQuantity = each.quantity + n;
				if (newQuantity < 1) return;
				each.quantity = newQuantity;
				state.set_totalPrice((prevPrice: number) => {
					return (prevPrice += each.price * n);
				});
				localStorage.setItem("MDC_cartItems", JSON.stringify(itemsCopy));
				state.setCartItems(itemsCopy);
			}
		}
	}

	function removeITem(id: string) {
		var priceDeduction = 0;
		const copy = items.filter((each: any) => {
			if (each.id === id) priceDeduction = each.price * each.quantity;
			return each.id !== id;
		});
		localStorage.setItem("MDC_cartItems", JSON.stringify(copy));
		state.setCartItems(copy);
		state.set_totalPrice((prev: number) => prev - priceDeduction);
	}

	const cartItems = items.map((each: any, index: number) => {
		let imgSrc = coffeePosters[each.id];
		if (each.id.startsWith("pastry")) imgSrc = pastryPosters[each.id];
		return (
			<CartItem
				imageSrc={imgSrc}
				idx={index}
				id={each.id}
				key={each.id}
				name={each.name}
				price={each.price}
				desc={each.desc}
				quantity={each.quantity}
				handleOpen={handleOpen}
				updateQuantity={handleQuantityUpdate}
			/>
		);
	});

	const emptyState = (
		<div>
			<h2 className="title text-align-center grey-2 mt-3">
				You have no items yet.
			</h2>
			<div className="mt-2 mb-3">
				<Router>
					<Link to="/Shop">
						<button className="second d-block m-auto">Shop now!</button>
					</Link>
				</Router>
			</div>
		</div>
	);

	const cartItemsHeader = (
		<div className="d-flex flex-align-center mt-2 mb-2">
			<div className="flex-1">
				<h3> Items </h3>
			</div>
			<span className="pr-4 mr-1">Price/piece</span>
			<span className="pr-3 mr-1">Quantity</span>
		</div>
	);

	return (
		<div className={rootClasses}>
			<div className={"inner " + commonClass}>
				<div className="d-flex flex-align-center">
					<h2 className="mb-2 flex-1">My Cart</h2>
					<h4 className="grey-3">
						You have {items.length} {items.length > 1 ? "items" : "item"}
					</h4>
				</div>
				<hr />
				{items.length === 0 ? <></> : cartItemsHeader}
				{items.length === 0 ? emptyState : cartItems}
			</div>

			<div className={"inner-g " + commonClass}>
				<div className="d-flex flex-align-center">
					<h4 className="flex-1 ">Total </h4>
					<h4 className="second mr-1 ">PHP {state.total_price}.00</h4>
					<Router>
						<Link to="/Shop">
							<button className="prime small f-size-small">Shop more!</button>
						</Link>
					</Router>
					&nbsp;&nbsp;
					<Tooltip title="Proceed to payment" placement="top">
						<Link
							to="/cart/checkout"
							className={items.length === 0 ? "disabled" : ""}>
							<button className="outline small click-effect f-size-small">
								Check Out
							</button>
						</Link>
					</Tooltip>
				</div>
			</div>

			<ConfirmDialog
				title="Please confirm"
				prompt="Are you sure you want to remove this item from your cart?"
				open={openConfirmation}
				handleYes={handleYes}
				handleNo={handleNo}
			/>
		</div>
	);
}
