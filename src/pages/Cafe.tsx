import { branches } from '../api/local.data';
import {useEffect, useContext} from "react";
import {motion} from  "framer-motion";

import globalState from "../api/context";
import Branch from '../components/Branch';

import shop1 from '../assets/coffee_shops/shop_1.jpg';
import shop2 from '../assets/coffee_shops/shop_2.jpg';
import shop3 from '../assets/coffee_shops/shop_3.jpg';
import shop4 from '../assets/coffee_shops/shop_4.jpg';

export default function Cafe() {

    const state = useContext<any>(globalState);

    const shops = { 
        shop_1: shop1, shop_2: shop2, shop_3: shop3, shop_4: shop4
    } as any;

    useEffect(()=>{
        state.set_ActiveLink(1);
    }, []);

    const branchesElements = branches.map((branch: any) => 
        <Branch
            src={shops[branch.id]}
            key={branch.id}
            email={branch.email}
            address={branch.address}
            phone={branch.phone}
            name={branch.name}
        />
    )

    return <motion.div
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: .5}}
            transition={{duration: .7}}>
        <div className="
            action mt-3    
            outer-w coffee-shop-action
            p-3 d-flex flex-just-center
            flex-align-center flex-direction-col">
            <h1 className="text-align-center mb-2 title">
                Let's have some coffee together!
            </h1>
            <p>
                Find nearest cafe from my location.
            </p>
            <button className="prime mt-2">Sure!</button>
        </div>

        <div className="outer-g pt-5 pb-4">
            {branchesElements}
        </div>
    </motion.div>
}