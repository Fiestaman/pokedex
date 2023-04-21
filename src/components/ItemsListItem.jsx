import { useNavigate } from "react-router-dom";

export default function ItemsListItem({ item: { name, id, img } }) {
  const navigate = useNavigate();
  //   console.log(img);
  const handleClickItem = (e) => {
    if (e.target.type !== "checkbox") {
      navigate(`/items/${id}`);
    }
  };

  return (
    <div className={`itemsListItem`} onClick={handleClickItem} key={id}>
      <div
        className="itemImage"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="name">{name}</div>
    </div>
  );
}
