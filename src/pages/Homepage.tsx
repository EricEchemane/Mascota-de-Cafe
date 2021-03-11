import {Grid} from '@material-ui/core';
import {useContext} from "react";

import Vid from '../assets/videos/landing-video.mp4';


import Story from '../components/Story';
import CoffeeCard from '../components/CoffeeCard';
import globalState from "../api/context";

import cp1 from '../assets/coffeePosters/cp-1.jpg';
import cp2 from '../assets/coffeePosters/cp-2.jpg';
import cp3 from '../assets/coffeePosters/cp-3.jpg';
import cp4 from '../assets/coffeePosters/cp-4.jpg';
import cp5 from '../assets/coffeePosters/cp-5.jpg';
import cp6 from '../assets/coffeePosters/cp-6.jpg';

export default function Homepage () {

    const state = useContext<any>(globalState);
    const source = {
        'cp-1': cp1,
        'cp-2': cp2,
        'cp-3': cp3,
        'cp-4': cp4,
        'cp-5': cp5,
        'cp-6': cp6,
    } as any;

    return <>
        <div className="landing-index">
            <div className="inner p-3">
                <Grid container >
                    <Grid item xs={12} md={6} >
                        <h1 className="title">
                            Coffee and Pets <br />
                            will bring you <br />
                            <span className="second"> Love</span> and <span className="prime">Energy</span>
                        </h1>
                        <p className="mt-4"> Get a 5% discount on your first visit. </p>
                        <p> Sign up and join our growing community, it's free! </p>

                        <button className="mt-2 prime"> SIGN UP </button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <video src={Vid} className="landing-video mt-1" muted autoPlay loop></video>
                    </Grid>
                </Grid>
            </div>

            <div className="outer-w">
                <div className="inner p-3 dflt-width">
                    <div className="slideshow ">
                        {state.coffees.map((coffee: any) => {
                            return <CoffeeCard
                                src={source[coffee.src]}
                                key={coffee.src}
                                name={coffee.name}
                                likes={coffee.likes} />;
                        })}
                    </div>
                </div>
            </div>

            <div className="outer-g pt-4 pb-4">
                <Story />
            </div>
        </div>
    </>;
}