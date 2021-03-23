import FavoriteIcon from '@material-ui/icons/Favorite';
export default function CoffeeCard (props: any) {

    return <>
        <div className="coffee-card">
            <img src={props.src} alt={props.name} />
            <h3 className="pl-3 pt-2">{props.name}</h3>
            <div className="d-flex flex-align-center pt-1 pl-3 prime">
                <FavoriteIcon fontSize="small" color="inherit" />
                <p> {props.likes} people like this </p>
            </div>
        </div>
    </>;
}