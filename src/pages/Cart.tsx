import {useContext} from "react";
import globalState from "../api/context";
import {
    HashRouter as Router,
    Link
} from 'react-router-dom';
import CartItem from "../components/CartItem";

export default function Cart(){
    const state = useContext<any>(globalState);
    const rootClasses = "outer-w mt-4 mb-2";
    const commonClass = "pl-3 pr-3 pt-2 pb-2 mt-1 pad-x-1";

    const items = state.cart_items;

    function handleQuantityUpdate(id: number, n: number) {
        const itemsCopy = items.slice();
        for(const each of itemsCopy) {
            if(each.id === id) {
                const newQuantity = each.quantity + n;
                if(newQuantity < 1) return;
                each.quantity = newQuantity;
                state.set_totalPrice((prevPrice: number) => {
                    return prevPrice += each.price * n;
                });
                state.setCartItems(itemsCopy);
            }
        }
    }

    function removeITem(id: string){
        var priceDeduction = 0;
        const copy = items.filter((each:any) => {
            if(each.id === id) priceDeduction = each.price * each.quantity;
            return each.id !== id;
        });
        state.setCartItems(copy);
        state.set_totalPrice((prev: number) => prev - priceDeduction);
    }

    const cartItems = items.map((each: any, index: number) => 
        <CartItem 
            idx={index}
            id={each.id}
            key={each.id}
            name={each.name}
            price={each.price}
            desc={each.desc}
            quantity={each.quantity}
            removeItem={removeITem}
            updateQuantity={handleQuantityUpdate}
        />
    )

    const emptyState = (
        <div>
            <h2 className="title text-align-center grey-2 mt-3">You have no items yet.</h2>
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
                <h3> Item </h3>
            </div>
            <span className="pr-4 mr-3">Price</span>
            <span className="pr-3 mr-1">Quantity</span>
        </div>
    );

    return (
        <div className={rootClasses}>

            <div className={"inner " + commonClass}>
                <div className="d-flex flex-align-center">
                    <h2 className="mb-2 flex-1">Your Cart</h2>
                    <h4 className="grey-3">You have {items.length} {items.length > 1 ? "items":"item" }</h4>
                </div>
                <hr/>
                {items.length === 0 ? <></> : cartItemsHeader}
                {items.length === 0 ? emptyState : cartItems}
            </div>

            <div className={"inner-g " + commonClass}>
                <div className="d-flex flex-align-center">
                    <h3 className="flex-1">Total </h3>
                    <h3 className="prime ml-1 mr-2">$ {state.total_price}.00</h3>
                    <button 
                        className={"outline small click-effect " + (items.length === 0 ? "disabled":"")}>Checkout</button> &nbsp;&nbsp;
                    <Router>
                        <Link to="/Shop">
                            <button className="second small" >Shop more!</button>
                        </Link>
                    </Router>
                </div>
            </div>
        </div>
    )
}