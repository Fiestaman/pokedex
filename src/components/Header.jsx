import PokeButton from "./PokeButton";
import { useNavigate } from "react-router-dom";

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <div className="pageTitle">
      <div className="pokeButton" onClick={() => navigate(`/`)}>
        <PokeButton />
        <div>Home</div>
      </div>
      <h1 className="title">{title}</h1>
      <div className="pokeButton" onClick={() => navigate(-1)}>
        <PokeButton />
        <div>Back</div>
      </div>
    </div>
  );
}
