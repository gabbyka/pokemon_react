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
  fetch("https://pokeapi.co/api/v2/pokemon/").then(res => res.json())
);

function PokemonListItem(props) {
  return <li {...props} />;
}

function PokemonList({ onSelect }) {
  return (
    <ul>
      {PokemonCollectionResource.read().results.map(pokemon => (
        <PokemonListItem
          onClick={() => onSelect(pokemon.url.split("/")[6])}
          key={pokemon.name}
        >
          {pokemon.name}
        </PokemonListItem>
      ))}
    </ul>
  );
}

function App() {
  let [selectedPokemonId, setSelectedPokemonId] = React.useState(1);
  return (
    <div>
      <h1>
        <span role="img" aria-label="React holiday">
          ⚛️🎄
        </span>
        : Day 7
      </h1>
      <strong>selected Pokemon id: {selectedPokemonId}</strong>
      <ErrorBoundary fallback={<div>Pokemon list loading broken</div>}>
        <React.Suspense fallback={<div>...loading</div>}>
          <PokemonList onSelect={id => setSelectedPokemonId(id)} />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
