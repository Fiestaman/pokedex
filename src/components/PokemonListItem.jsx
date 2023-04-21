import { useNavigate } from "react-router-dom";

export default function PokemonListItem({
  pokemon: { name, id, collected, img },
  pokemonList,
  setPokemonList,
}) {
  const navigate = useNavigate();

  const handleClickPokemon = (e) => {
    if (e.target.type !== "checkbox" && e.target.className !== "name") {
      navigate(`/pokemons/${id}`);
    }
  };

  const handleCollected = () => {
    collected = !collected;
    pokemonList[id - 1].collected = collected;
    setPokemonList([...pokemonList]);
  };

  return (
    <div
      className={`pokemonListItem${collected ? " collected" : ""}`}
      onClick={handleClickPokemon}
      key={id}
    >
      <div
        className="pokemonImage"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="name" onClick={handleCollected}>
        {id + "." + name}
        <input
          type="checkbox"
          checked={collected}
          readOnly
          className="checkbox"
        />
      </div>
    </div>
  );
}
