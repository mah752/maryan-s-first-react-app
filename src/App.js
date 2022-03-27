import React from "react";
import "./App.css";
import Weather from "./Weather";
import Animation from "./animation";

export default function App() {
  return (
    <div className="App">
      <div className="app-container"> 
      <header>
        <h1>What is the weather today?</h1>
        <Animation/>
      </header>
        <Weather defaultCity="Birmingham" />
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
