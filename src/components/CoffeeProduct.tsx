import Grid from "@material-ui/core/Grid";
import StarRateIcon from "@material-ui/icons/StarRate";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";
import { useState } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function CoffeeProduct(props: any) {
	const [price, setPrice] = useState(props.price[0]);
	function handleAdd() {
		props.handleAddToCart(props.id, props.name, getPrice(), props.desc);
	}
	function getPrice() {
		if (props.id.startsWith("cp")) return price;
		return props.price;
	}
	function handleChange(changeEvent: any) {
		const value = changeEvent.target.value;
		setPrice(props.price[value]);
	}

	return (
		<Grid item xs={6} sm={4} md={3} className="p-3 coffeeProducts">
			<div className="bg-1 trans-3 hover-lift coffee-product">
				<img
					loading="lazy"
					src={props.imgSrc}
					alt={props.name}
					className="fullWidth"
					title={props.desc}
				/>

				<Accordion
					square={true}
					elevation={0}
					style={{
						backgroundColor: "transparent",
						boxShadow: "none",
						border: "none",
						margin: "0",
						top: "-5px",
					}}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header">
						<h4> {props.name} </h4>
					</AccordionSummary>
					<AccordionDetails>
						<p>{props.desc}</p>
					</AccordionDetails>
				</Accordion>

				<Tooltip title={`${props.rating} people like this.`}>
					<p className="prime d-flex flex-align-center pl-2 pr-2">
						<span className="flex-1 f-size-xs">
							<StarRateIcon fontSize="small" className="f-size-xs" />
							<StarRateIcon fontSize="small" className="f-size-xs" />
							<StarRateIcon fontSize="small" className="f-size-xs" />
							<StarRateIcon fontSize="small" className="f-size-xs" />
							<StarRateIcon fontSize="small" className="f-size-xs" />
						</span>
					</p>
				</Tooltip>
				<div className="d-flex pl-2 pt-1">
					{props.id.startsWith("cp") ? (
						<>
							<h4 className="second flex-1">PHP {price}</h4>
							<select
								name="size"
								className="mr-2 mb-2 f-size-xs cur-pointer"
								onChange={handleChange}>
								<option value="0">Regular {props.price[0]} </option>
								<option value="1">Large {props.price[1]} </option>
							</select>
						</>
					) : (
						<h4 className="second flex-1">PHP {props.price}</h4>
					)}
				</div>
				<div className="pl-2 pb-2 d-flex flex-align-center">
					<p className="cur-pointer hover-blue f-size-small">Order now</p>
					<div className="flex-grow"></div>
					<Tooltip title="Add to cart" placement="left-end">
						<span onClick={handleAdd} className="cur-pointer hover-blue pr-2">
							<AddShoppingCartIcon />
						</span>
					</Tooltip>
				</div>
			</div>
		</Grid>
	);
}
