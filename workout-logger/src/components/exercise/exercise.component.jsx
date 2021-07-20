import React from "react";

const ExerciseCard = ({ name, sets, reps, ytUrl }) => (
  <div className="exercise-card">
    <div className="name">{name}</div>
    <div className="sets">{sets}</div>
    <div className="reps">{reps}</div>
    <div className="demo-video">{ytUrl}</div>
  </div>
);

export default ExerciseCard;
