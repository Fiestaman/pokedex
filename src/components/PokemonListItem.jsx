import { useNavigate } from "react-router-dom";

export default function PokemonListItem({ pokemon: { name, url, id } }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemons/${id}`);
  };

  return (
    <div className="pokemonListItem" onClick={handleClick} key={id}>
      {id + ". " + name}
    </div>
  );
}
