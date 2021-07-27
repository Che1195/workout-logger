import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

import { makeStyles } from "@material-ui/core/styles";
import {
	Box,
	Checkbox,
	Collapse,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Paper,
} from "@material-ui/core";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Autorenew } from "@material-ui/icons";

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
});

const useTableStyles = makeStyles({
	root: {
		width: "90vw",
		margin: "1rem auto",
	},
});

function createData(name, calories, fat, carbs, protein, price) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		history: [
			{ date: "2020-01-05", customerId: "11091700", amount: 3 },
			{ date: "2020-01-02", customerId: "Anonymous", amount: 1 },
		],
	};
}

function Row(props) {
	const { row } = props;
	const [checked, setChecked] = React.useState(false);
	const [open, setOpen] = React.useState(false);

	const classes = useRowStyles();

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<React.Fragment>
			<TableRow
				hover={true}
				className={classes.root}
				onClick={() => setOpen(!open)}
			>
				<TableCell component="th" scope="row">
					<Checkbox
						checked={checked}
						onChange={handleChange}
						onClick={(event) => event.stopPropagation()}
						inputProps={{ "aria-label": "primary checkbox" }}
					/>
					{row.name}
				</TableCell>
				<TableCell align="right">{row.calories}</TableCell>
				<TableCell align="right">{row.fat}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<ReactPlayer
							light={true}
							style={
								{
									// padding: "2px",
								}
							}
							height="169px"
							width="300px"
							controls={true}
							url="https://www.youtube.com/watch?v=ug50zmP9I7s"
						/>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

Row.propTypes = {
	row: PropTypes.shape({
		calories: PropTypes.number.isRequired,
		carbs: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		history: PropTypes.arrayOf(
			PropTypes.shape({
				amount: PropTypes.number.isRequired,
				customerId: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
			})
		).isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		protein: PropTypes.number.isRequired,
	}).isRequired,
};

const rows = [
	createData("Push Ups", "3x10", "BW"),
	createData("Sit Ups", 237, 9.0),
	createData("Bench Press", 262, 15),
	createData("Pull Ups", 305, 3.7),
	createData("Farmer Carries", 356, 16.0),
];

export default function WorkoutTable() {
	const classes = useTableStyles();

	return (
		<TableContainer className={classes.root} component={Paper}>
			<Table aria-label="collapsible table" size="small">
				<TableBody>
					{rows.map((row) => (
						<Row key={row.name} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
