import {Grid} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';

export default function CoffeeProduct(props: any) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className="p-3">
            <div className="bg-1 cur-pointer hover-lift trans-3 active-effect" title={props.desc}>
                <img src={props.imgSrc} alt={props.name} className="fullWidth" />
                    <h3 className="pl-2">{props.name}</h3>
                    <p className="prime d-flex flex-align-center pl-2">
                        <StarIcon fontSize="small" className="f-size-small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarHalfIcon fontSize="small" />
                        ({props.rating})
                    </p>
                    <div className="d-flex pl-2 pt-2 pb-2">
                        <h3 className="second flex-1">$ {props.price}</h3>
                        <Tooltip title="Add to cart" placement="left-end">
                            <span 
                                onClick={props.handleAddToCart}
                                className="cur-pointer hover-blue pr-2" >
                                <AddShoppingCartIcon fontSize="small" />
                            </span>
                        </Tooltip>
                    </div>
            </div>
        </Grid>
    )
}