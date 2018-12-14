import React from "react";
import ReactDOM from "react-dom";

function PokemonListItem(props) {
  return <li {...props} />;
}

function App() {
  return (
    <div>
      <h1>
        <span role="img" aria-label="React holiday">
          ⚛️🎄
        </span>
        : Day 1
      </h1>
      <ul>
        <PokemonListItem>Pokemon jeee</PokemonListItem>
        <PokemonListItem>Pokemon jeee</PokemonListItem>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
