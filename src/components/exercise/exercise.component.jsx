import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		lineHeight: 0,
		margin: "1rem",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 20,
		color: "black",
	},
	sets: {
		display: "inline-block",
		background: "lightblue",
		border: ".25px solid black",
		padding: ".25rem",
		borderRadius: "6px",
		margin: ".5rem",
	},
	pos: {
		marginBottom: 12,
	},
});

export default function SimpleCard({
	name = "Push Up",
	sets,
	countType,
	countAmount,
	bw,
	weightUnit,
	weight,
}) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					align="left"
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					{name}s
				</Typography>
				<Typography className={classes.sets} component="h2">
					Sets: {sets}
				</Typography>
				<Typography className={classes.sets}>
					{countType}: {countAmount}
				</Typography>
				<Typography className={classes.sets} component="p">
					{weightUnit}
				</Typography>
			</CardContent>
		</Card>
	);
}

// import React from "react";

// const ExerciseCard = ({ name, movement, types, contractionType, ytUrl }) => (
// 	<div className="exercise-card">
// 		<div className="name">{name}</div>
// 		<div className="movement">{movement}</div>
// 		<div className="types">{types}</div>
// 		<div className="contraction-type">{contractionType}</div>
// 		<div className="contraction-type">{ytUrl}</div>
// 	</div>
// );

// export default ExerciseCard;
