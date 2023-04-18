// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Type from "../components/Type";
// import GetPokemonData from "../components/GetPokemonData";
import BackButton from "../components/BackButton";

export default function Pokemon({ pokemonList }) {
  const { id } = useParams();

  const loadedList = () => {
    // destructure pokemon information
    let {
      name,
      gif,
      species: {
        generation_id: genid,
        pokemon_v2_generation: { name: genName },
      },
      stats: {
        0: { base_stat: hp },
        1: { base_stat: attack },
        2: { base_stat: defense },
        3: { base_stat: specialAttack },
        4: { base_stat: specialDefense },
        5: { base_stat: speed },
      },
      xp,
    } = pokemonList[id - 1];

    genName = genName.slice(11).toUpperCase();

    const types = () => {
      return pokemonList[id - 1].types.map((type, i) => {
        // console.log(type);
        return <Type type={type.pokemon_v2_type} key={`type${i}`} />;
      });
    };

    return (
      <div className="pokemon">
        <div className="pageTitle">
          <BackButton />
          <h1 className="pokemonTitle">{name}</h1>
        </div>
        <img src={gif} alt={name} />
        <div className="types">{types()}</div>
        <div className="generation">Generation: {genName}</div>
        <div className="hp">HP: {hp}</div>
        <div className="attack">Attack: {attack}</div>
        <div className="defense">Defense: {defense}</div>
        <div className="specialAttack">Special Attack: {specialAttack}</div>
        <div className="specialDefense">Special Defense: {specialDefense}</div>
        <div className="speed">Speed: {speed}</div>
        <div className="xp">XP: {xp}</div>
      </div>
    );
  };

  //   console.log(pokemonData);

  // useEffect(() => {
  //   if (pokemonList?.length === 0) {getPokemonData()}
  // }, []);

  return <>{pokemonList?.length > 0 ? loadedList() : "Loading..."}</>;
}
