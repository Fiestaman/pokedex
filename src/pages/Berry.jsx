import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import NotFound from "./NotFound";
import Header from "../components/Header";

export default function Berry({ berriesList }) {
  const { id } = useParams();

  const loaded = () => {
    if (id > 64 || id < 1) return <NotFound />;

    // destructure berry information
    let {
      name,
      img,
      size,
      flavors,
      firmness: { name: firmness },
      smoothness,
    } = berriesList[id - 1];

    const Flavors = flavors.map((flavor) => {
      return (
        <div className="flavor">
          {flavor.pokemon_v2_berryflavor.name[0].toUpperCase() +
            flavor.pokemon_v2_berryflavor.name.slice(1)}
          : {flavor.potency}
        </div>
      );
    });

    return (
      <div className="berry">
        <Header title={name} />
        <div className="infoPage">
          <img src={img} alt={name} />
          <div className="info">
            <div className="size">Size: {size}</div>
            <div className="firmness">
              Firmness: {firmness[0].toUpperCase() + firmness.slice(1)}
            </div>
            <div className="firmness">Smoothness: {smoothness}</div>
            {Flavors}
          </div>
        </div>
      </div>
    );
  };

  //   console.log(pokemonData);

  // useEffect(() => {
  //   if (pokemonList?.length === 0) {getPokemonData()}
  // }, []);

  return <>{berriesList?.length > 0 ? loaded() : "Loading..."}</>;
}
