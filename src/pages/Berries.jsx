import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";
import BerriesListItem from "../components/BerriesListItem";
import Header from "../components/Header";

export default function Berries({ berriesList, setBerriesList }) {
  const [term, setTerm] = useState("");

  const filterBerries = (berry) => {
    const regex = new RegExp(`\\w*${term}\\w*`, "i");
    return berry.name.match(regex);
  };

  const Berries = () => {
    return berriesList
      .filter((berry) => {
        return filterBerries(berry);
      })
      .map((berry) => {
        return <BerriesListItem key={berry.id} berry={berry} />;
      });
  };

  // useEffect(() => {
  //   GetBerries();
  // }, []);

  return (
    <div className="berries">
      <Header title="Berries" />
      <SearchBar term={term} setTerm={setTerm} key="searchBar" />
      <div className="berriesList">
        {berriesList.length > 0 ? Berries() : "Loading..."}
      </div>
    </div>
  );
}
