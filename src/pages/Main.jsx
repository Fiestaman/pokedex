import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="mainItem" onClick={() => navigate(`/pokemons`)}>
        Pokedex (Collection Tracker)
      </div>
      <div className="mainItem" onClick={() => navigate(`/items`)}>
        Items
      </div>
      <div className="mainItem" onClick={() => navigate(`/berries`)}>
        Berries
      </div>
      <div className="mainItem" onClick={() => navigate(`/about`)}>
        About
      </div>
    </div>
  );
}
