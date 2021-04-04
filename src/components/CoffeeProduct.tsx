import {Grid} from "@material-ui/core";
import StarRateIcon from '@material-ui/icons/StarRate';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';

export default function CoffeeProduct(props: any) {
    function handleAdd(){
        props.handleAddToCart(
            props.id,
            props.name,
            props.price,
            props.desc,
        );
    }
    return (
        <Grid item xs={6} sm={4} lg={3} className="p-3 coffeeProducts">
            <div className="bg-1 hover-lift trans-3 active-effect">
                <img 
                    src={props.imgSrc} 
                    alt={props.name} 
                    className="fullWidth" 
                    title={props.desc} />

                    <h3 className="pl-2" title={props.desc}> {props.name} </h3>

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
                    <div className="d-flex pl-2 pt-2 pb-1">
                        <h3 className="second flex-1">$ {props.price}</h3>
                    </div>
                    <div className="pl-2 pb-2 d-flex flex-align-center">  
                        <p className="cur-pointer flex-1 hover-blue f-size-small">Order now</p>
                        <Tooltip title="Add to cart" placement="left-end">
                            <span 
                                onClick={handleAdd}
                                className="cur-pointer hover-blue pr-2" >
                                <AddShoppingCartIcon />
                            </span>
                        </Tooltip>
                    </div>
            </div>
        </Grid>
    )
}