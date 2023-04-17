export default function SearchBar({ term, setTerm }) {
  const changeTerm = (e) => {
    setTerm(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="searchbar"
        onChange={changeTerm}
        placeholder="Enter search term"
      />
    </>
  );
}
