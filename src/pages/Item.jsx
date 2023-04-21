import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "../components/Header";

export default function Item({ itemsList }) {
  const { id } = useParams();

  const loaded = () => {
    const item = itemsList.find((item) => {
      return item.id === +id;
    });

    if (!item) {
      return <NotFound />;
    }
    // destructure item information
    let {
      name,
      img,
      cost,
      flavorText: {
        0: { flavor_text: flavorText },
      },
      category: {
        pokemon_v2_itemcategorynames: {
          0: { name: categoryName },
        },
      },
    } = item;

    return (
      <div className="item">
        <Header title={name} />
        <div className="infoPage">
          <img src={img} alt={name} />
          <div className="info">
            <div className="category">Category: {categoryName}</div>
            <div className="cost">Cost: {cost}</div>
            <div className="flavor">{flavorText}</div>
          </div>
        </div>
      </div>
    );
  };

  //   console.log(pokemonData);

  // useEffect(() => {
  //   if (pokemonList?.length === 0) {getPokemonData()}
  // }, []);

  return <>{itemsList?.length > 0 ? loaded() : "Loading..."}</>;
}
