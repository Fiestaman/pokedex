import { useNavigate } from "react-router-dom";
import logo from "../Assets/PokedexCompendium.png";
import weezing from "../Assets/Weezing.png";
import pokeball from "../Assets/Pokeball.png";
import berry from "../Assets/GoldenRazzBerry.png";
import question from "../Assets/QuestionMark.png";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <img src={logo} alt="Pokedex Compendium" className="logo" />
      <div className="mainItems">
        <div className="mainItem" onClick={() => navigate(`/pokemons`)}>
          <img src={weezing} alt="Pokedex" className="mainImg" />
          <div className="iconText">
            <p className="pokedexText">Pokedex</p>
            <p className="collectionTracker">(Collection Tracker)</p>
          </div>
        </div>
        <div className="mainItem" onClick={() => navigate(`/items`)}>
          <img src={pokeball} alt="Items Menu" className="mainImg" />
          <div className="iconText">Items</div>
        </div>
        <div className="mainItem" onClick={() => navigate(`/berries`)}>
          <img src={berry} alt="Berries Menu" className="mainImg" />
          <div className="iconText">Berries</div>
        </div>
        <div className="mainItem" onClick={() => navigate(`/about`)}>
          <img src={question} alt="More Info" className="mainImg" />
          <div className="iconText">Info</div>
        </div>
      </div>
    </div>
  );
}
