import PokemonListItem from "../components/PokemonListItem";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";

export default function PokemonList({ pokemonList, setPokemonList }) {
  const [term, setTerm] = useState("");

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

  // useEffect(() => {
  //   GetPokemons();
  // }, []);

  return (
    <div className="pokedex">
      <div className="pageTitle">
        <BackButton />
        <h1>Pokedex (Collection Tracker)</h1>
      </div>
      <SearchBar term={term} setTerm={setTerm} key="searchBar" />
      <div className="pokemonList">
        {pokemonList.length > 0 ? pokemons() : "Loading..."}
      </div>
    </div>
  );
}
