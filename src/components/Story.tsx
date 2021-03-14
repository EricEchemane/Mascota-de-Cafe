import {Grid} from "@material-ui/core";

export default function Story (props: any) {
    return <>
        <div className="inner dflt-width mt-4 mb-4">
            <div className="story">
                <Grid container >
                    <Grid item xs={12} sm={5} className="pos-rel">
                        <div className="storyGlass" style={{backgroundImage: `url(${props.src})`}}></div>
                        <div className="glass-dark h-100">
                            <h1 className="p-3 white"> "{props.title}." </h1>
                            <p className="pl-3 white">Photo by: {props.photoBy} </p>
                            <p className="pl-3 pb-3 white"> @{props.branch} </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <img src={props.src} alt={props.name} className="photo" />
                    </Grid>
                    <Grid item xs={12} className="p-3 bg-w">
                        <div className="d-flex mb-2">
                            <img src={props.profile} alt={`${props.name} profile`} className="avatar-s" />
                            <div className="pl-2">
                                <h4 className="d-inline">{props.name}</h4>
                                <p className="grey">@{props.insta}</p>
                            </div>
                        </div>
                        <p>{props.story}</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    </>;
}