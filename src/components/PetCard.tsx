import Grid from "@material-ui/core/Grid";
import Accordion from "../components/Accordion";

export default function PetCard(props: any) {
	return (
		<Grid item xs={6} sm={4} lg={3} className="p-3 pad-x-1">
			<img src={props.imageSrc} alt={props.name} className="fullWidth" />
			<Accordion
				sex={props.sex}
				breed={props.breed}
				content={props.content}
				title={props.name}
			/>
		</Grid>
	);
}
