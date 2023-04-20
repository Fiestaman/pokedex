import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import NotFound from "./NotFound";

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
          {flavor.pokemon_v2_berryflavor.name}: {flavor.potency}
        </div>
      );
    });

    return (
      <div className="berry">
        <div className="pageTitle">
          <BackButton />
          <h1 className="berryTitle">{name}</h1>
        </div>
        <img src={img} alt={name} />
        <div className="size">Size: {size}</div>
        <div className="firmness">Firmness: {firmness}</div>
        <div className="firmness">Smoothness: {smoothness}</div>
        {Flavors}
      </div>
    );
  };

  //   console.log(pokemonData);

  // useEffect(() => {
  //   if (pokemonList?.length === 0) {getPokemonData()}
  // }, []);

  return <>{berriesList?.length > 0 ? loaded() : "Loading..."}</>;
}
