import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Openpage() {
  const [movie, setmovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setmovie(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const summaryEvent = (id) => {
    navigate(`/summary/${id}`);
  };

  return (
    <>
      <h1 id="navbar">Explore All The Movies</h1>
      <div id="movie">
        {movie.map((item) => (
          <div key={item.show.id}>
            <ul>
              <li>
                <img src={item.show.image?.medium} alt="image not found" />
                <h1>{item.show.name}</h1>
                <p id="description">
                  {item.show.summary.replace(/<[^>]+>/g, "")}
                </p>
                <button onClick={() => summaryEvent(item.show.id)}>
                  Show Summary
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Openpage;
