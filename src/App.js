import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ExerciseCard from "./components/exercise/exercise.component";

class App extends Component {
  constructor() {
    super();

    this.state = [
      {
        name: "Push Ups",
        sets: "3",
        reps: "10",
        ytUrl: "https://www.youtube.com/watch?v=_l3ySVKYVJ8",
      },
    ];
  }

  render() {
    return (
      <div className="App">
        <ExerciseCard {...this.state[0]} />
      </div>
    );
  }
}

export default App;
