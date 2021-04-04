import Grid from '@material-ui/core/Grid';
export default function Branch(props: any) {
    return  <>
        <div className="branch inner-w mb-5 ">
            <Grid container>
                <Grid item xs={12} md={6} className="p-3">
                    <img src={props.src} alt={props.name} loading="lazy" className="radius-8" />
                </Grid>
                <Grid item xs={12} md={6} className="p-3">
                    <h1 className="prime">{props.name}</h1>
                    <p className="mt-1 mb-2"> {props.address} </p>

                    <h4 className="mb-2">Contact Info.</h4>
                    <p>
                        Email: &nbsp;&nbsp; <a href={`mailto:${props.email}`}> {props.email} </a> 
                    </p>
                    <p>Phone: &nbsp; {props.phone} </p>
                    <div className="mt-3">
                        <button className="outline">View quick map</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    </>
}