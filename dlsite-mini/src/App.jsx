import { useEffect, useState } from "react";
import "./App.css";

async function getPokemonData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
  const resBody = await res.json();
  return resBody.sprites.front_default;
}

function App() {
  const [pokemonImageUrl, setPokemonImageUrl] = useState("");

  useEffect(() => {
    async function getPokemon() {
      const pokemonImage = await getPokemonData();
      setPokemonImageUrl(pokemonImage);
    }

    getPokemon();
  }, []);

  return (
    <>
      <h1>charizard</h1>

      {pokemonImageUrl ? (
        <img src={pokemonImageUrl} width={300} height={300} />
      ) : null}
    </>
  );
}

export default App;
