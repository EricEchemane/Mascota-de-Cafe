import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function FeatureCard(props: any) {
	return (
		<>
			<Grid item xs={12} md={6} lg={4}>
				<Router>
					<div className="feature-card">
						<video src={props.video} muted loop autoPlay></video>
						<div>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header">
									<h3> {props.title} </h3>
								</AccordionSummary>
								<AccordionDetails>
									<p>{props.content}</p>
								</AccordionDetails>
								<Link to={props.route} className="pl-2">
									Learn more
								</Link>
								<div className="p-1"></div>
							</Accordion>
						</div>
					</div>
				</Router>
			</Grid>
		</>
	);
}
