import React from "react";
import ReactDOM from "react-dom";
import { unstable_createResource as createResource } from "react-cache";

let PokemonCollectionResource = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/").then(res => res.json())
);

function PokemonListItem(props) {
  return <li {...props} />;
}

function PokemonList() {
  return (
    <ul>
      {PokemonCollectionResource.read().results.map(pokemon => (
        <PokemonListItem key={pokemon.name}>{pokemon.name}</PokemonListItem>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span role="img" aria-label="React holiday">
          ⚛️🎄
        </span>
        : Day 4
      </h1>
      <React.Suspense fallback={<div>...loading</div>}>
        <PokemonList />
      </React.Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
