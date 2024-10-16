import { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";

function Summary() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!show) {
    return <div id="loading">Loading...</div>;
  }

  return (
    <div id="summary">
      <img src={show.image?.medium} alt="image not found" id="show-img" />
      <h1>{show.name}</h1>
      <p id="description">{show.summary?.replace(/<[^>]+>/g, "")}</p>
      <div id="summary-button-div">
        <button
          id="sum-button"
          onClick={() => navigate(`/summary/${id}/booknow`)}
        >
          Show Data
        </button>
        <button id="sum-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Summary;
