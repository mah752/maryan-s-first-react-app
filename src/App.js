import React, { Component, useEffect, useRef } from "react";
import "./App.css";
import WeatherInfo from "./Weatherinfo";
//import CurrentLocation from "./CurrentLocation";
import lottie from "lottie-web";

function App() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./walk.json"),
    });
  }, []);
  return (
    <div className="App">
      <header>
        <h1>What is the weather today?</h1>
      </header>{" "}
      <WeatherInfo />
      <div className="container" ref={container}>
        </div> 
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
  );
}

export default App;
