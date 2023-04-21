import { useNavigate } from "react-router-dom";

export default function BerriesListItem({ berry: { name, id, img } }) {
  const navigate = useNavigate();
  console.log(img);
  const handleClickBerry = (e) => {
    if (e.target.type !== "checkbox") {
      navigate(`/berries/${id}`);
    }
  };

  return (
    <div className={`berriesListItem`} onClick={handleClickBerry} key={id}>
      <div
        className="berryImage"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="name">{name}</div>
    </div>
  );
}
