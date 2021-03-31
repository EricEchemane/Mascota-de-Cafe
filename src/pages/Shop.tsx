import {useState} from "react";
import {Grid} from "@material-ui/core";
import s4 from "../assets/stories/s4.jpg";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Badge from '@material-ui/core/Badge';

export default function Shop() {
    const rootClasses = "outer-g";
    const [activeTab, set_activeTab] = useState(0);
    return (
        <div className={rootClasses}>
            <div className="inner">
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <h1 className="pt-5 pl-3 title center-875px">
                            Let's share <br/>
                            <span className="prime">
                                Experiences <br/> Together.
                            </span>
                        </h1>
                        <p className="pl-3 pt-3 pb-3 center-875px">
                            <cite>
                                Scene from Filinvest City Branch <br/>
                                Sunday | 2:00 PM
                            </cite>
                        </p>
                    </Grid>
                    <Grid item xs={12} md={7} className="pr-3 pt-3 pad-0-875px">
                        <img src={s4} className="fullWidth fullHeight" alt="Coffee table"/>
                    </Grid>
                </Grid>
            </div>
            
            <div className="outer-w">
                <div className="inner p-3">
                    /{(activeTab === 0 ? "Coffee":"Pastry")}
                </div>
            </div>

            <div className="shopBar">
                <div className="flex-1">
                    <button 
                        onClick={()=>{set_activeTab(0)}}
                        className={"small" + (activeTab !== 0 ? "":" active-btn")}>
                        Coffee
                    </button> 
                    <button 
                        onClick={()=>{set_activeTab(1)}}
                        className={"small" + (activeTab !== 1 ? "":" active-btn")}>
                        Pastry
                    </button>
                </div>
                <div className="d-flex flex-align-center cur-pointer" title="View Cart" >
                    <Badge badgeContent={1} color="secondary">
                        <ShoppingCartIcon /> 
                    </Badge>
                </div>
            </div>
        </div>
    )   
}