import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SimpleSelect(props: any) {
	const [stateValue, setStateValue] = React.useState(props.defaultValue);

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setStateValue(event.target.value as string);
	};

	return (
		<div>
			<FormControl variant="outlined" className="fullWidth">
				<InputLabel id="demo-simple-select-outlined-label">
					{props.name}
				</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={stateValue}
					onChange={handleChange}
					label="Age">
					{props.options.map((option: any) => (
						<MenuItem value={option} key={option}>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
