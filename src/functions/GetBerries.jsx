import { gql, useQuery } from "@apollo/client";

export default function GetBerries({ berriesList, setBerriesList }) {
  const queryBerries = gql`
    {
      results: pokemon_v2_berry {
        id
        name
        size
        flavors: pokemon_v2_berryflavormaps {
          potency
          pokemon_v2_berryflavor {
            name
          }
          id
        }
        firmness: pokemon_v2_berryfirmness {
          name
        }
        smoothness
      }
    }
  `;

  const { loading, error, data } = useQuery(queryBerries, {
    onCompleted: (completedData) => {
      let { results } = completedData;
      let tempResults = [];
      for (let i = 0; i < results.length; i++) {
        let tempResult = { ...results[i] };
        let shorturl =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";
        tempResult.img = `${shorturl}${tempResult.name}-berry.png`;
        tempResult.name =
          tempResult.name[0].toUpperCase() + tempResult.name.slice(1);
        tempResults.push(tempResult);
      }
      setBerriesList([...berriesList, ...tempResults]);
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
