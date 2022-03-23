import React from "react";
import "./App.css";
import Weather from "./Weather";
import Animation from "./animation";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>What is the weather today?</h1>
      </header>{" "}
      <div className="container">
        <Animation />
        <Weather City="Birmingham" />
        <footer>
          <a
            className="App-link"
            href="https://github.com/mah752/maryan-s-first-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coded by Maryan Hussein{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
