import { gql, useQuery } from "@apollo/client";

export default function GetItems({ itemsList, setItemsList }) {
  const queryItems = gql`
    {
      results: pokemon_v2_item(
        order_by: { id: asc }
        where: { id: { _lt: 1006 } }
      ) {
        cost
        name
        flavorText: pokemon_v2_itemflavortexts(
          limit: 1
          where: { language_id: { _eq: 9 } }
        ) {
          flavor_text
        }
        category: pokemon_v2_itemcategory {
          pokemon_v2_itemcategorynames(where: { id: { _nin: [23, 36, 40] } }) {
            name
            id
          }
        }
        id
        pokemon_v2_itemsprites {
          sprites
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(queryItems, {
    onCompleted: (completedData) => {
      let { results } = completedData;
      let tempResults = [];
      for (let i = 0; i < results.length; i++) {
        if (
          results[i]?.flavorText?.length === 0 ||
          results[i]?.category?.pokemon_v2_itemcategorynames.length === 0
        ) {
          continue;
        }
        let tempResult = { ...results[i] };
        let shorturl =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";
        tempResult.img = `${shorturl}${tempResult.name}.png`;
        tempResult.name =
          tempResult.name[0].toUpperCase() + tempResult.name.slice(1);
        tempResults.push(tempResult);
      }
      setItemsList([...itemsList, ...tempResults]);
    },
  });

  // if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return;
}
