import { gql, useQuery } from "@apollo/client";

export default function GetItems({ itemsList, setItemsList }) {
  // console.log(pokemonList);
  // return;
  const queryItems = gql`
    {
      results: pokemon_v2_item(order_by: { id: asc }) {
        cost
        name
        flavorText: pokemon_v2_itemflavortexts(
          limit: 1
          where: { language_id: { _eq: 9 } }
        ) {
          flavor_text
        }
        pokemon_v2_itemcategory {
          pokemon_v2_itemcategorynames {
            name
          }
        }
        id
      }
    }
  `;

  // if (pokemonList.length > 0) return;
  // try {
  //   const { data } = useQuery(queryPokemons);
  //   console.log(data);

  const { loading, error, data } = useQuery(queryItems, {
    onCompleted: (completedData) => {
      let { results } = completedData;
      let tempResults = [];
      for (let i = 0; i < results.length; i++) {
        let tempResult = { ...results[i] };
        let shorturl =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";
        tempResult.img = `${shorturl}${tempResult.name}.png`;
        tempResult.name =
          tempResult.name[0].toUpperCase() + tempResult.name.slice(1);
        tempResults.push(tempResult);
      }
      setItemsList([...itemsList, ...tempResults]);
      // onCompleted is a standard useQuery option
      //   setPokemonList(completedData.results);
    },
  });

  // if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  //   console.log(data);
  //   // const response = await fetch(url);
  //   // const data = await response.json();
  //   let { results } = data;
  //   console.log("this is results", results);
  return;
  // } catch (err) {
  // console.log(err);
}
// };
