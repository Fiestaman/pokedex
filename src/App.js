import { Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/pokemons/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
