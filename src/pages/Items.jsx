import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";
import ItemsListItem from "../components/ItemsListItem";

export default function Items({ itemsList, setItemsList }) {
  const [term, setTerm] = useState("");

  const filterItems = (item) => {
    const regex = new RegExp(`\\w*${term}\\w*`, "i");
    return item.name.match(regex);
  };

  const Items = () => {
    return itemsList
      .filter((item) => {
        return filterItems(item);
      })
      .map((item) => {
        return <ItemsListItem key={item.id} item={item} />;
      });
  };

  // useEffect(() => {
  //   GetBerries();
  // }, []);

  return (
    <div className="items">
      <div className="pageTitle">
        <BackButton />
        <h1>Items</h1>
      </div>
      <SearchBar term={term} setTerm={setTerm} key="searchBar" />
      <div className="itemsList">
        {itemsList.length > 0 ? Items() : "Loading..."}
      </div>
    </div>
  );
}
