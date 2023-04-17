import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Type from "../components/Type";

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState({});

  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getPokemonData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const loaded = () => {
    // destructure pokemon information
    let {
      name,
      sprites: { front_default: img },
      stats: {
        0: { base_stat: hp },
        1: { base_stat: attack },
        2: { base_stat: defense },
        3: { base_stat: specialAttack },
        4: { base_stat: specialDefense },
        5: { base_stat: speed },
      },
    } = pokemonData;

    // Capitalize name
    name = name[0].toUpperCase() + name.slice(1);

    const types = () => {
      return pokemonData.types.map((type, i) => {
        // console.log(type);
        return <Type type={type.type} key={`type${i}`} />;
      });
    };

    return (
      <>
        <h1 className="pokemonTitle">{name}</h1>
        <img src={img} alt={name} />
        <div className="types">{types()}</div>
        <div className="hp">HP: {hp}</div>
        <div className="attack">Attack: {attack}</div>
        <div className="defense">Defense: {defense}</div>
        <div className="specialAttack">Special Attack: {specialAttack}</div>
        <div className="specialDefense">Special Defense: {specialDefense}</div>
        <div className="speed">Speed: {speed}</div>
      </>
    );
  };

  //   console.log(pokemonData);

  useEffect(() => {
    getPokemonData();
  }, []);

  return <>{pokemonData?.name ? loaded() : "Loading..."}</>;
}
