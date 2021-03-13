import {Grid} from '@material-ui/core';
import react, {useContext} from "react";

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

import s1 from '../assets/stories/s1.jpg';
import s2 from '../assets/stories/s2.jpg';
import s3 from '../assets/stories/s3.jpg';
import s4 from '../assets/stories/s4.jpg';

import sp1 from '../assets/profiles/s1.jpg';
import sp2 from '../assets/profiles/s2.jpg';
import sp3 from '../assets/profiles/s3.jpg';
import sp4 from '../assets/profiles/s4.png';

function Homepage () {

    var state = useContext<any>(globalState);

    const source = {
        'cp-1': cp1,
        'cp-2': cp2,
        'cp-3': cp3,
        'cp-4': cp4,
        'cp-5': cp5,
        'cp-6': cp6,
    } as any;

    const storyImageSource = {
        s1: s1, s2: s2, s3: s3, s4: s4
    } as any;
    const profilesImageSource = {
        s1: sp1, s2: sp2, s3: sp3, s4: sp4
    } as any;

    const stories = state.stories.map((story: any) =>
        <Story
            title={story.title}
            name={story.name}
            branch={story.branch}
            insta={story.instagram}
            id={story.id}
            key={story.id}
            src={storyImageSource[story.id]}
            story={story.story}
            profile={profilesImageSource[story.id]}
            photoBy={story.photoBy}
        />
    );

    return <>
        <div className="landing-index">
            <div className="inner p-3 mb-3">
                <Grid container >
                    <Grid item xs={12} md={6} >
                        <h1 className="title1">
                            Coffee and Pets <br />
                            will bring you <br />
                            <span className="second"> Love</span> and <span className="prime">Energy</span>
                        </h1>
                        <p className="mt-4"> Get a 5% discount on your first visit. </p>
                        <p> Sign up and join our growing community, it's free! </p>

                        <button className="mt-2 prime"> SIGN UP </button> &nbsp;
                        <button className="mt-2 outline"> GET DISCOUNT </button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <video src={Vid} className="landing-video mt-1" muted autoPlay loop></video>
                    </Grid>
                </Grid>
            </div>

            <div className="outer-w">
                <div className="inner">
                    <h1 className="prime text-align-center pt-4 title">Our Bests</h1>
                </div>
                <div className="inner pl-3 pr-3 pb-3 pt-3 dflt-width">
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

            <div className="outer-g pt-1 pb-2">
                <h1 className="text-align-center pt-4 title">Our Stories</h1>
                {stories}
            </div>
        </div>
    </>;
}
export default react.memo(Homepage);