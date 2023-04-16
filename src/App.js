import { Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Pokemon from "./pages/Pokemon";
import Main from "./pages/Main";
import About from "./pages/About";
import { useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/pokemons"
          element={
            <PokemonList
              pokemonList={pokemonList}
              setPokemonList={setPokemonList}
            />
          }
        />
        <Route path="/pokemons/:id" element={<Pokemon />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
