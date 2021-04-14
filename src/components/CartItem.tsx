import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Tooltip from "@material-ui/core/Tooltip";
export default function CartItem(props: any) {
	const name = props.name;
	const id = props.id;
	const desc = props.desc;
	const price = props.price;
	let quantity = props.quantity;
	const updateQuanity = props.updateQuantity;

	const rootClasses = "d-flex flex-align-center pt-1 pb-2";
	return (
		<div className={rootClasses}>
			<div className="flex-1 d-flex d-block-500 flex-align-center">
				<img
					src={props.imageSrc}
					alt={name}
					className="height-40 radius-8 pr-2"
				/>
				<div>
					<h4>{name}</h4>
					<p className="f-size-small grey-2 pr-2">{desc}</p>
				</div>
			</div>
			<div className="d-flex flex-align-center">
				<span className="pr-3 pl-1"> $ {price} </span>
				<span>
					<button
						onClick={() => {
							updateQuanity(id, -1);
						}}
						className="small btn-counter">
						-
					</button>
					<span className="quantity"> {quantity} </span>
					<button
						onClick={() => {
							updateQuanity(id, 1);
						}}
						className="small btn-counter">
						+
					</button>
				</span>
				<Tooltip title="Remove to cart">
					<span
						onClick={() => {
							props.handleOpen(id);
						}}
						className="ml-2 cur-pointer click-effect">
						<DeleteOutlineIcon fontSize="small" />
					</span>
				</Tooltip>
			</div>
		</div>
	);
}
