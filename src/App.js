import React, { Component } from "react";
import "./App.css";

import ExerciseCard from "./components/exercise/exercise.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			exercises: [
				{
					name: "Push Ups",
					movement: "upper-push",
					types: ["strength", "stability"],
					contractionType: "concentric",
					ytUrl: "https://www.youtube.com/watch?v=_l3ySVKYVJ8",
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
		const data = {
			name: "Power Push Ups",
			movement: "upper-push",
			types: ["strength", "stability"],
			contractionType: "concentric",
			ytUrl: "https://www.youtube.com/watch?v=_l3ySVKYVJ8",
		};

		console.log(this.state.exercises);

		return (
			<div className="App">
				{this.state.exercises.map((exercise) => (
					<ExerciseCard {...exercise} />
				))}
				<button onClick={() => this.addExercise(data)}>Create Exercise</button>
			</div>
		);
	}
}

export default App;
