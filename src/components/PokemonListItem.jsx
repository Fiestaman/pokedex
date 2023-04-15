import { useNavigate } from "react-router-dom";

export default function PokemonListItem({ pokemon }) {
  // destructure pokemon object
  const { name, url, id } = pokemon;
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
