import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button className="back" onClick={() => navigate(-1)}>
        &lt;
      </button>
    </>
  );
}
