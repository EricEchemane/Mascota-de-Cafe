import {Grid} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarRateIcon from '@material-ui/icons/StarRate';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';

export default function CoffeeProduct(props: any) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className="p-3">
            <div className="bg-1 cur-pointer hover-lift trans-3 active-effect">
                <img src={props.imgSrc} alt={props.name} className="fullWidth" title={props.desc} />
                    <h3 className="pl-2" title={props.desc}>{props.name}</h3>
                    <Tooltip title={`${props.rating} people like this.`}>
                        <p className="prime d-flex flex-align-center pl-2 pr-2">
                            <div className="flex-1 pt-1">
                                <StarRateIcon fontSize="small" />
                                <StarRateIcon fontSize="small" />
                                <StarRateIcon fontSize="small" />
                                <StarRateIcon fontSize="small" />
                                <StarRateIcon fontSize="small" /> 
                            </div>
                            <span>{props.rating}</span>
                        </p>
                    </Tooltip>
                    <div className="d-flex pl-2 pt-2 pb-1">
                        <h3 className="second flex-1">$ {props.price}</h3>
                    </div>
                    <div className="pl-2 pb-2 d-flex">  
                        <p className="cur-pointer flex-1 hover-blue f-size-small">Order now</p>
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