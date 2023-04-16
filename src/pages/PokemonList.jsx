import PokemonListItem from "../components/PokemonListItem";
import { useEffect } from "react";

export default function PokemonList({ pokemonList, setPokemonList }) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`;

  const getPokemons = async () => {
    if (pokemonList.length > 0) return;
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
        i < 151
          ? (data.results[i].generation = 1)
          : i < 251
          ? (data.results[i].generation = 2)
          : i < 386
          ? (data.results[i].generation = 3)
          : i < 493
          ? (data.results[i].generation = 1)
          : i < 649
          ? (data.results[i].generation = 5)
          : i < 721
          ? (data.results[i].generation = 6)
          : i < 809
          ? (data.results[i].generation = 7)
          : (data.results[i].generation = 8);
      }
      setPokemonList([...pokemonList, ...data.results]);
    } catch (err) {
      console.log(err);
    }
  };

  const pokemons = () => {
    return pokemonList.map((pokemon) => {
      return (
        <PokemonListItem
          pokemon={pokemon}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
        />
      );
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
