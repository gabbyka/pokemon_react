import React from "react";
import ReactDOM from "react-dom";

function PokemonListItem(props) {
  return <li {...props} />;
}

let characterData = [
  { name: "blueOne" },
  { name: "redOne" },
  { name: "yellowOne" }
];

function App() {
  return (
    <div>
      <h1>
        <span role="img" aria-label="React holiday">
          ⚛️🎄
        </span>
        : Day 2
      </h1>
      <ul>
        {characterData.map(item => (
          <PokemonListItem>{item.name}</PokemonListItem>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
