
export default function CoffeeCard (props: any) {

    return <>
        <div className="coffee-card">
            <img src={props.src} alt={props.name} />
            <h3 className="pl-3 pt-2">{props.name}</h3>
            <p className="prime pl-3"> {props.likes} people like this </p>
        </div>
    </>;
}