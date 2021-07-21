import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ExerciseCard from "./components/exercise/exercise.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      exercises: [
        {
          name: "Push Ups",
          sets: "5",
          reps: "10",
          ytUrl: "https://www.youtube.com/watch?v=_l3ySVKYVJ8",
        },
        {
          name: "Squats",
          sets: "5",
          reps: "10",
          ytUrl: "https://www.youtube.com/watch?v=ultWZbUMPL8",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.exercises.map((exercise) => (
          <ExerciseCard {...exercise} />
        ))}
      </div>
    );
  }
}

export default App;
