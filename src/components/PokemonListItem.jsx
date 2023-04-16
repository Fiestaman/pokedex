import { useNavigate } from "react-router-dom";

export default function PokemonListItem({
  pokemon: { name, url, id, collected, img },
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemons/${id}`);
  };

  return (
    <div className="pokemonListItem" onClick={handleClick} key={id}>
      <img src={img} alt={name} />
      {id + ". " + name}
      <input type="checkbox" checked={collected} />
    </div>
  );
}
