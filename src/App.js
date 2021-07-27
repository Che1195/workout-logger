import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./App.css";

import ExerciseCard from "./components/exercise/exercise.component";
import WorkoutTable from "./components/workout/workout-table.component";
import YoutubeEmbed from "./components/youtube-embed/youtube-embed.component";
import PrimarySearchAppBar from "./components/app-bar/app-bar.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			exercises: [
				{
					id: "1",
					name: "Push Ups",
					movement: "upper-push",
					types: ["strength", "stability"],
					contractionType: "concentric",
					ytUrl: "https://www.youtube.com/watch?v=_l3ySVKYVJ8",
					isUnilateral: "Bilateral",
				},
			],
			logExercises: [
				{
					exerciseId: "1",
					sets: 3,
					countAmount: 10,
					countType: "reps", // can be reps, time, distance
					timeUnit: null, // can be sec, min, hr
					distanceUnit: null, // in, ft, m, mile, yard,
					weightUnit: "BW",
					weight: null,
				},
			],
		};
	}

	addExercise(data) {
		this.setState((prevState) => {
			console.log(prevState.exercises);
			const exercises = prevState.exercises + data;
			return { exercises: exercises };
		});
	}

	render() {
		const exerciseInfo = {
			name: "Power Push Ups",
			movement: "upper-push",
			types: ["strength", "stability"],
			contractionType: "concentric",
			ytUrl: "https://www.youtube.com/watch?v=_l3ySVKYVJ8",
		};

		const logExercise = {
			exercise: exerciseInfo,
			sets: 3,
			count: "reps", // can be reps, time, distance
			timeUnit: null, // can be sec, min, hr
			distanceUnit: null, // in, ft, m, mile, yard,
			weightUnit: "BW",
			weight: 1,
		};

		console.log(this.state.exercises);

		return (
			<div className="App">
				<PrimarySearchAppBar />
				<WorkoutTable className="table" />
			</div>
		);
	}
}

export default App;
