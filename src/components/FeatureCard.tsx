import {Grid} from "@material-ui/core";
import {useRef} from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

export default function FeatureCard (props: any) {

    const vid = useRef<any>();

    function play () {
        vid.current.play();
    }
    function pause () {
        vid.current.pause();
    }

    return <>
        <Grid item xs={12} md={6} lg={4} className="d-flex flex-just-center">
            <Router>
                <div className="feature-card ">
                    <h2 className="text-align-center dark-1"> {props.title} </h2>
                    <video ref={vid} poster={props.poster} src={props.video} muted loop onMouseEnter={play} onMouseLeave={pause}></video>
                    <p className="pl-2 pr-2 pb-2">
                        {props.content}
                    </p>
                    <Link to={props.route} className="p-2"> Learn more</Link>
                </div>
            </Router>
        </Grid>
    </>;
}