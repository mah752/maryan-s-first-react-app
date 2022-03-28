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
          <div className="animation-container"> 
          <Animation /> <Animation/> <Animation/>
          </div>
        </header>
        <Weather defaultCity="London" />
        <footer>
          <a
            className="App-link"
            href="https://github.com/mah752/maryan-s-first-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coded by Maryan Hussein{" "}
          </a> <p> Thanks to ReactAnimatedWeather and Lottie Animations</p>
        </footer>
      </div>
    </div>
  );
}
