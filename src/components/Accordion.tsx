import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function SimpleAccordion(props: any) {
	function isVowelRegEx(char: any) {
		if (char.length == 1) {
			return /[aeiouAEIOU]/.test(char);
		}
	}

	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header">
					<h4> {props.title} </h4>
				</AccordionSummary>
				<AccordionDetails>
					<p>
						{props.sex} is {isVowelRegEx(props.breed[0]) ? "an" : "a"}{" "}
						{props.breed}. {props.content}
					</p>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
