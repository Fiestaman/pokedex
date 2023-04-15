import { Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/pokemons" element={<PokemonList />} />
      </Routes>
    </div>
  );
}

export default App;
