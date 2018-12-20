import React from "react";
import ReactDOM from "react-dom";
import { unstable_createResource as createResource } from "react-cache";

let PokemonCollectionResource = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/").then(res => res.json())
);

function PokemonListItem(props) {
  return <li {...props} />;
}

let PokemonDetailResource = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/1/").then(res => res.json())
);

function PokemonDetailItem(props) {
  return <div {...props} />;
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

function PokemonDetail() {
  return (
    <div>
      {PokemonDetailResource.read().abilities.map(pokemon => (
        <PokemonDetailItem>
          {pokemon.slot} {pokemon.ability.name}
        </PokemonDetailItem>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span role="img" aria-label="React holiday">
          ⚛️🎄
        </span>
        : Day 5
      </h1>
      <React.Suspense fallback={<div>...loading Pokemon Detail!</div>}>
        <PokemonDetail />
      </React.Suspense>

      <React.Suspense fallback={<div>...loading</div>}>
        <PokemonList />
      </React.Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
