import PokemonListItem from "../components/PokemonListItem";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

export default function PokemonList({ pokemonList, setPokemonList }) {
  const [term, setTerm] = useState("");

  const filterPokemon = (pokemon) => {
    const regex = new RegExp(`\\w*${term}\\w*`, "i");

    return (
      pokemon.name.match(regex) ||
      pokemon.id.toString().match(regex) ||
      pokemon.species.pokemon_v2_generation.name.match(regex)
      // pokemon.types[0]?.pokemon_v2_type?.name?.match(regex) ||
      // pokemon.types[1]?.pokemon_v2_type?.name?.match(regex)
    );
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

  // useEffect(() => {
  //   GetPokemons();
  // }, []);

  return (
    <div className="pokedex">
      <Header title="Pokedex" />
      <SearchBar term={term} setTerm={setTerm} key="searchBar" />
      <div className="pokemonList">
        {pokemonList.length > 0 ? pokemons() : "Loading..."}
      </div>
    </div>
  );
}
