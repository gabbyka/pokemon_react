import React from "react";
import ReactDOM from "react-dom";
import { unstable_createResource as createResource } from "react-cache";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div>Something went wrong.</div>
      );
    }

    return this.props.children;
  }
}

let PokemonCollectionResource = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon-blaa/").then(res => res.json())
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
        : Day 6
      </h1>
      <ErrorBoundary fallback={<div>Pokemon list loading broken</div>}>
        <React.Suspense fallback={<div>...loading</div>}>
          <PokemonList />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
