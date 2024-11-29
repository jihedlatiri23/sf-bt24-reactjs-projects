import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonCard from "./Components/PokemonCard";
import pokemonLogo from "./assets/logo.png"

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = [];
      for (let i = 1; i <= 8; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const { id, name, stats, types, sprites } = response.data;
        pokemonList.push({
          id,
          name,
          types: types.map((type) => type.type.name),
          stats,
          image: sprites.other["official-artwork"].front_default,
        });
      }
      setPokemonData(pokemonList);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <img
          src={pokemonLogo}
          alt="Pokémon Logo"
          className="navbar-logo"
        />
      </nav>
      <div className="cards">
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};


export default App;
