import BackButton from "../components/BackButton";

export default function NotFound() {
  return (
    <div className="notFound">
      <BackButton />
      <h1>Page not found. Please go back.</h1>
    </div>
  );
}
