import Grid from "@material-ui/core/Grid";
import StarRateIcon from "@material-ui/icons/StarRate";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";
import { useState } from "react";

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
		<Grid item xs={6} sm={4} lg={3} className="p-3 coffeeProducts">
			<div className="bg-1 hover-lift trans-3 active-effect">
				<img
					src={props.imgSrc}
					alt={props.name}
					className="fullWidth"
					title={props.desc}
				/>

				<h3 className="pl-2" title={props.desc}>
					{" "}
					{props.name}{" "}
				</h3>

				<Tooltip title={`${props.rating} people like this.`}>
					<p className="prime d-flex flex-align-center pl-2 pr-2">
						<span className="flex-1 pt-1">
							<StarRateIcon fontSize="small" />
							<StarRateIcon fontSize="small" />
							<StarRateIcon fontSize="small" />
							<StarRateIcon fontSize="small" />
							<StarRateIcon fontSize="small" />
						</span>
						<span>{props.rating}</span>
					</p>
				</Tooltip>
				<div className="d-flex pl-2 pt-1">
					{props.id.startsWith("cp") ? (
						<>
							<h3 className="second flex-1">PHP {price}</h3>
							<select
								name="size"
								className="mr-2 mb-2 f-size-xs"
								onChange={handleChange}>
								<option value="0">Regular</option>
								<option value="1">Large</option>
							</select>
						</>
					) : (
						<h3 className="second flex-1">PHP {props.price}</h3>
					)}
				</div>
				<div className="pl-2 pb-2 d-flex flex-align-center">
					<p className="cur-pointer flex-1 hover-blue f-size-small">
						Order now
					</p>
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
