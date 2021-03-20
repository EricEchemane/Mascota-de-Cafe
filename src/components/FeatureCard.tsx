import {Grid} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

export default function FeatureCard (props: any) {

    return <>
        <Grid item xs={12} md={6} lg={4} className="d-flex flex-just-center">
            <Router>
                <div className="feature-card">
                    <h2
                        className="text-align-center dark-1 p-2">
                        {props.title}
                    </h2> 
                    <video
                        src={props.video}
                        muted loop
                        autoPlay>
                    </video>
                    <p className="pl-2 pr-2 pt-1">
                        {props.content}
                    </p>
                    <Link to={props.route} className="p-2"> Learn more</Link>
                </div>
            </Router>
        </Grid>
    </>;
}