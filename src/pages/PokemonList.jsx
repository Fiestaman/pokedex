import PokemonListItem from "../components/PokemonListItem";
import { useEffect } from "react";

export default function PokemonList({ pokemonList, setPokemonList }) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`;

  const getPokemons = async () => {
    if (pokemonList.length >= 5) return;
    try {
      const response = await fetch(url);
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        data.results[i].name =
          data.results[i].name[0].toUpperCase() + data.results[i].name.slice(1);
        data.results[i].id = i + 1;
        data.results[i].collected = false;
        data.results[
          i
        ].img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          i + 1
        }.png`;
      }
      setPokemonList([...pokemonList, ...data.results]);
    } catch (err) {
      console.log(err);
    }
  };

  const pokemons = () => {
    return pokemonList.map((pokemon) => {
      return <PokemonListItem pokemon={pokemon} />;
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="pokemonList">
      {pokemonList.length > 0 ? pokemons() : "Loading..."}
    </div>
  );
}
