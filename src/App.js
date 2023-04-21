import { Route, Routes } from "react-router-dom";
import PokemonList from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";
import Main from "./pages/Main";
import About from "./pages/About";
import { useState } from "react";
import GetPokemons from "./functions/GetPokemons";
import Berries from "./pages/Berries";
import Items from "./pages/Items";
import GetBerries from "./functions/GetBerries";
import GetItems from "./functions/GetItems";
import Berry from "./pages/Berry";
import Item from "./pages/Item";
import NotFound from "./pages/NotFound";
import gameboy from "./Assets/GameBoyColor.png";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [berriesList, setBerriesList] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  return (
    <div className="App">
      <div className="screen">
        <Routes>
          <Route path="/" element={<Main key="Main" />} />
          <Route
            path="/pokemons"
            element={
              <PokemonList
                key="PokemonList"
                pokemonList={pokemonList}
                setPokemonList={setPokemonList}
              />
            }
          />
          <Route
            path="/pokemons/:id"
            element={<Pokemon key="Pokemon" pokemonList={pokemonList} />}
          />
          <Route
            path="/berries"
            element={<Berries key="Berries" berriesList={berriesList} />}
          />
          <Route
            path="/berries/:id"
            element={<Berry key="Berry" berriesList={berriesList} />}
          />
          <Route path="/items" element={<Items itemsList={itemsList} />} />
          <Route path="/items/:id" element={<Item itemsList={itemsList} />} />
          <Route path="/about" element={<About key="About" />} />
          <Route path="*" element={<NotFound key="NotFound" />} />
        </Routes>
        {pokemonList.length === 0 ? (
          <GetPokemons
            pokemonList={pokemonList}
            setPokemonList={setPokemonList}
          />
        ) : (
          ""
        )}
        {berriesList.length === 0 ? (
          <GetBerries
            berriesList={berriesList}
            setBerriesList={setBerriesList}
          />
        ) : (
          ""
        )}
        {itemsList.length === 0 ? (
          <GetItems itemsList={itemsList} setItemsList={setItemsList} />
        ) : (
          ""
        )}
      </div>
      <img src={gameboy} alt="Gameboy Color" className="gameboy" />
    </div>
  );
}

export default App;
