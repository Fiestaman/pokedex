import { gql, useQuery } from "@apollo/client";

export default function GetPokemons({ pokemonList, setPokemonList }) {
  const queryPokemons = gql`
    query samplePokeAPIquery {
      results: pokemon_v2_pokemon(limit: 905, order_by: { id: asc }) {
        id
        name
        stats: pokemon_v2_pokemonstats {
          base_stat
          id
          pokemon_v2_stat {
            name
          }
        }
        types: pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        xp: base_experience
        species: pokemon_v2_pokemonspecy {
          generation_id
          pokemon_v2_generation {
            name
          }
        }
      }
    }
  `;

  // if (pokemonList.length > 0) return;
  // try {
  //   const { data } = useQuery(queryPokemons);
  //   console.log(data);

  const { loading, error, data } = useQuery(queryPokemons, {
    onCompleted: (completedData) => {
      let { results } = completedData;
      let tempResults = [];
      for (let i = 0; i < results.length; i++) {
        let tempResult = { ...results[i] };
        tempResult.name =
          tempResult.name[0].toUpperCase() + tempResult.name.slice(1);
        // data.results[i].id = i + 1;
        tempResult.collected = false;
        tempResult.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          i + 1
        }.png`;
        // i < 151
        //   ? (data.results[i].generation = 1)
        //   : i < 251
        //   ? (data.results[i].generation = 2)
        //   : i < 386
        //   ? (data.results[i].generation = 3)
        //   : i < 493
        //   ? (data.results[i].generation = 1)
        //   : i < 649
        //   ? (data.results[i].generation = 5)
        //   : i < 721
        //   ? (data.results[i].generation = 6)
        //   : i < 809
        //   ? (data.results[i].generation = 7)
        //   : (data.results[i].generation = 8);
        tempResults.push(tempResult);
      }
      setPokemonList([...pokemonList, ...tempResults]);
      // onCompleted is a standard useQuery option
      //   setPokemonList(completedData.results);
    },
  });

  if (loading) return "Loading...";
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
