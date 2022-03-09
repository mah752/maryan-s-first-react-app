import React, { useEffect, useRef } from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
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
        <div className="container" ref={container}></div>
        <SearchEngine />
      </header>{" "}
      <footer>
        <a
          className="App-link"
          href="https://reactjs.org"
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
