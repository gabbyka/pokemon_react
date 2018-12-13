import React from "react";
import ReactDOM from "react-dom";

function PokemonListItem(props) {
  return <li className="pokemon" {...props} />;
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
        <PokemonListItem>Pokemon</PokemonListItem>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
