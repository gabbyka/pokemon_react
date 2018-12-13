import React from "react";
import ReactDOM from "react-dom";

function Greeting(props) {
  return <span {...props} />;
}

function App() {
  return (
    <div>
      <h1>
        <span role="img" aria-label="React holiday">
          ⚛️🎄
        </span>
        : Day 0
      </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
