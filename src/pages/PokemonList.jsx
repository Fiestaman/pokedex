import PokemonListItem from "../components/PokemonListItem";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

export default function PokemonList({ pokemonList, setPokemonList }) {
  const [term, setTerm] = useState("");

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

  const filterPokemon = (pokemon) => {
    const regex = new RegExp(`\\w*${term}\\w*`, "i");
    return pokemon.name.match(regex) || pokemon.id.toString().match(regex);
  };

  const pokemons = () => {
    return pokemonList
      .filter((pokemon) => {
        return filterPokemon(pokemon);
      })
      .map((pokemon) => {
        return (
          <PokemonListItem
            key={pokemon.id}
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
      <h1>Pokedex (Collection Tracker)</h1>
      <SearchBar term={term} setTerm={setTerm} key="searchBar" />
      {pokemonList.length > 0 ? pokemons() : "Loading..."}
    </div>
  );
}
