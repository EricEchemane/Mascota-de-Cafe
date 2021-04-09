import globalState from "./api/context";
import { useState, useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import { AnimatePresence } from "framer-motion";
// pages
import Homepage from "../src/pages/Homepage";
import Cafe from "../src/pages/Cafe";
import Shop from "../src/pages/Shop";
import Cart from "../src/pages/Cart";
import Pets from "../src/pages/Pets";
import Checkout from "../src/pages/Checkout";

import Footer from "../src/components/Footer";
import Contact from "../src/components/Contact";
import Signup from "../src/components/Signup";
import Login from "../src/components/Login";
import logo from "./assets/illutration/logo192.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { coffees_data, stories_data, localUser } from "./api/local.data";

import { Route, Switch, HashRouter as Router, Link } from "react-router-dom";
// icons
import MenuIcon from "@material-ui/icons/Menu";

function App() {
	const [cartItems, set_cartItems] = useState<any>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [userIsLogin, setUserIsLogin] = useState(false);

	const [states, setStates] = useState<any>({
		coffees: coffees_data,
		stories: stories_data,
		signupHidden: true,
		loginHidden: true,
		currentUser: {},
	});

	function addToCart(
		_id: string,
		_name: string,
		_price: number,
		_desc: string
	) {
		setTotalPrice((prevPrice: number) => {
			return (prevPrice += _price);
		});
		const items = cartItems.slice();
		items.push({
			id: _id,
			name: _name,
			desc: _desc,
			price: _price,
			quantity: 1,
		});
		localStorage.setItem("MDC_cartItems", JSON.stringify(items));
		set_cartItems(items);
	}

	const [contactsHidden, set_contactsHidden] = useState(true);
	const sideNav_isClose = useRef(true);
	const [activeUrlIndex, set_activeUrlIndex] = useState([
		"active-link",
		"",
		"",
		"",
	]);

	function scrollToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	function dispatchDimmer() {
		if (!sideNav_isClose.current) toggleSideNav();
		else if (!contactsHidden) toggleContacts();
		else if (!states.signupHidden) toggleSignup();
		else if (!states.loginHidden) toggleLogin();
	}

	function toggleSignup() {
		setStates((prev: any) => {
			prev.signupHidden ? dim() : dim(false);
			return {
				...prev,
				signupHidden: !prev.signupHidden,
			};
		});
	}

	function toggleLogin() {
		setStates((prev: any) => {
			prev.loginHidden ? dim() : dim(false);
			return {
				...prev,
				loginHidden: !prev.loginHidden,
				signupHidden: true,
			};
		});
	}

	function toggleSideNav() {
		const sideNav = document.getElementById("side-nav");
		if (sideNav_isClose.current) {
			var right = "0";
			var dimmer = true;
		} else {
			right = "-310px";
			dimmer = false;
		}
		if (sideNav) sideNav.style.right = right;
		dim(dimmer);
		sideNav_isClose.current = !sideNav_isClose.current;
		set_contactsHidden(true);
		setStates((prev: any) => {
			return {
				...prev,
				signupHidden: true,
				loginHidden: true,
			};
		});
	}

	function dim(open: boolean = true) {
		const dimmer = document.getElementById("dimmer");
		if (open) {
			var display = "block";
			var opa = "1";
		} else {
			display = "none";
			opa = "0";
		}
		if (dimmer) {
			dimmer.style.display = display;
			dimmer.style.opacity = opa;
		}
	}

	function toggleContacts() {
		set_contactsHidden((prev: any) => {
			if (prev) dim();
			else dim(false);
			return !prev;
		});
		setStates((prev: any) => {
			return {
				...prev,
				signupHidden: true,
				loginHidden: true,
			};
		});
	}

	function setActiveLink(n: number) {
		let x = ["", "", "", "", "", ""];
		x[n] = "active-link";
		set_activeUrlIndex(x);
	}

	useEffect(() => {
		const url = window.location.href;
		if (url.toLowerCase().endsWith("#/")) setActiveLink(0);
		else if (url.toLowerCase().endsWith("#/cafe")) setActiveLink(1);
		else if (url.toLowerCase().endsWith("#/shop")) setActiveLink(2);
		else if (url.toLowerCase().endsWith("#/cart")) setActiveLink(5);

		/* check cart items in the localStorage */
		const mdc_items = localStorage.getItem("MDC_cartItems");
		if (mdc_items !== null) {
			const items = JSON.parse(mdc_items);
			setTotalPrice(getTotalPrice(items));
			set_cartItems(items);
		}

		/* Check existing user */
		const existingUser = localStorage.getItem("MDC_user");
		if (existingUser) {
			setStates((prev: any) => {
				return {
					...prev,
					currentUser: JSON.parse(existingUser),
				};
			});
			setUserIsLogin(true);
			window.location.href = "http://localhost:3000/Mascota-de-Cafe/#/shop";
			// window.location.href = "https://ericechemane.github.io/Mascota-de-Cafe/#/shop";
		}
	}, []);

	function getTotalPrice(items: any) {
		let total = 0;
		for (const each of items) total += each.quantity * each.price;
		return total;
	}

	function handleNavbarClick(n: number) {
		scrollToTop();
		setActiveLink(n);
	}
	function handleSideNavClick(n: number) {
		scrollToTop();
		toggleSideNav();
		setActiveLink(n);
	}

	return (
		<>
			<globalState.Provider
				value={{
					...states,
					cart_items: cartItems,
					total_price: totalPrice,
					user_is_login: userIsLogin,
					toggle_signup: toggleSignup,
					toggle_login: toggleLogin,
					set_ActiveLink: setActiveLink,
					setCartItems: set_cartItems,
					addCart: addToCart,
					set_totalPrice: setTotalPrice,
				}}>
				<Router>
					<nav id="navbar" className="d-flex flex-align-center">
						<Link
							to="/shop"
							className="dark-1 p-3 flex-1 d-flex flex-align-center link-title">
							<img
								src={logo}
								className="logo mr-1"
								alt="mascota de cafe logo"
							/>
							<h3>Mascota de Cafe</h3>
						</Link>

						<Link
							onClick={() => {
								handleNavbarClick(0);
							}}
							to="/"
							className={"dark-1 p-3 nav-link " + activeUrlIndex[0]}>
							{" "}
							Home{" "}
						</Link>
						<Link
							onClick={() => {
								handleNavbarClick(2);
							}}
							to="/shop"
							className={"dark-1 p-3 nav-link " + activeUrlIndex[2]}>
							{" "}
							Shop{" "}
						</Link>
						<Link
							onClick={() => {
								handleNavbarClick(1);
							}}
							to="/cafe"
							className={"dark-1 p-3 nav-link " + activeUrlIndex[1]}>
							{" "}
							Cafe{" "}
						</Link>
						<Link
							onClick={() => {
								handleNavbarClick(3);
							}}
							to="/pets"
							className={"dark-1 p-3 nav-link " + activeUrlIndex[3]}>
							{" "}
							Pets{" "}
						</Link>

						<p onClick={toggleContacts} className={"dark-1 p-3 nav-link"}>
							{" "}
							Contacts{" "}
						</p>

						<Link
							to="/cart"
							className={"dark-1 pl-2 pr-3 link-title " + activeUrlIndex[5]}
							onClick={() => {
								handleNavbarClick(5);
							}}>
							<Tooltip title="Your Cart">
								<Badge badgeContent={cartItems.length} color="secondary">
									<ShoppingCartIcon />
								</Badge>
							</Tooltip>
						</Link>

						<div
							onClick={toggleSideNav}
							id="menu-bar-icon"
							className="p-2 cur-pointer">
							{" "}
							<MenuIcon />{" "}
						</div>
					</nav>

					<nav id="side-nav">
						<Link
							onClick={() => {
								handleSideNavClick(0);
							}}
							to="/"
							className={"dark-1 p-2 ml-2 " + activeUrlIndex[0]}>
							{" "}
							Home{" "}
						</Link>
						<Link
							onClick={() => {
								handleSideNavClick(2);
							}}
							to="/shop"
							className={"dark-1 p-2 ml-2 " + activeUrlIndex[2]}>
							{" "}
							Shop{" "}
						</Link>
						<Link
							onClick={() => {
								handleSideNavClick(1);
							}}
							to="/cafe"
							className={"dark-1 p-2 ml-2 " + activeUrlIndex[1]}>
							{" "}
							Cafe{" "}
						</Link>
						<Link
							onClick={() => {
								handleSideNavClick(3);
							}}
							to="/pets"
							className={"dark-1 p-2 ml-2 " + activeUrlIndex[3]}>
							{" "}
							Pets{" "}
						</Link>
						<p
							onClick={() => {
								toggleSideNav();
								toggleContacts();
							}}
							className={"dark-1 p-2 ml-2"}>
							{" "}
							Contacts{" "}
						</p>
					</nav>

					<AnimatePresence>
						<Switch>
							<Route path="/" exact component={Homepage} />
							<Route path="/cafe" exact component={Cafe} />
							<Route path="/shop" exact component={Shop} />
							<Route path="/pets" exact component={Pets} />
							<Route path="/cart" exact component={Cart} />
							<Route path="/cart/checkout" exact component={Checkout} />
						</Switch>
					</AnimatePresence>

					<footer>
						<Footer />
					</footer>

					<Box hidden={contactsHidden}>
						<Contact />
					</Box>
					<Box hidden={states.signupHidden}>
						<Signup
							setUserLoginProps={setUserIsLogin}
							setStateProp={setStates}
						/>
					</Box>
					<Box hidden={states.loginHidden}>
						<Login />
					</Box>
				</Router>
			</globalState.Provider>
			<div id="dimmer" onClick={dispatchDimmer}></div>
		</>
	);
}
export default App;
