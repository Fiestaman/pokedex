import { gql, useQuery } from "@apollo/client";

export default function GetPokemons({ pokemonList, setPokemonList }) {
  const queryPokemons = gql`
    {
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

  const { loading, error, data } = useQuery(queryPokemons, {
    onCompleted: (completedData) => {
      let { results } = completedData;
      let tempResults = [];
      for (let i = 0; i < results.length; i++) {
        let tempResult = { ...results[i] };
        tempResult.name =
          tempResult.name[0].toUpperCase() + tempResult.name.slice(1);
        tempResult.collected = false;
        let shorturl =
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
        tempResult.img = `${shorturl}${`${i + 1}`.padStart(3, 0)}.png`;
        shorturl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
        tempResult.gif = `${shorturl}other/showdown/${i + 1}.gif`;
        tempResults.push(tempResult);
      }
      setPokemonList([...pokemonList, ...tempResults]);
    },
  });

  // if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return;
}
