import React, { useEffect, useRef } from "react";
import "./App.css";
import Weather from "./Weather";
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
      <div className="container" ref={container}></div>
      <Weather defaultCity="London" />
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
