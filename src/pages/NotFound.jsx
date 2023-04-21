import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function NotFound() {
  return (
    <div className="notFound">
      <BackButton />
      <h1>
        Page not found. Please go back or to the <Link to={`/`}>home</Link>{" "}
        screen.
      </h1>
    </div>
  );
}
