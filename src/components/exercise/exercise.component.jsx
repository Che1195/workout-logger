import React from "react";

const ExerciseCard = ({ name, movement, types, contractionType, ytUrl }) => (
	<div className="exercise-card">
		<div className="name">{name}</div>
		<div className="movement">{movement}</div>
		<div className="types">{types}</div>
		<div className="contraction-type">{contractionType}</div>
		<div className="contraction-type">{ytUrl}</div>
	</div>
);

export default ExerciseCard;
