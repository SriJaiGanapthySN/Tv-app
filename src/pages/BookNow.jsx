import React, { useContext, useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { useParams, useNavigate, Outlet } from "react-router-dom";

function BookNow() {
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
    <>
      <div>
        <h1>Book Now</h1>
        <Form>
          <div id="booknow">
            <label>title</label>
            <input type="text" id="name" defaultValue={show.name} />
            <label>language</label>
            <input type="text" id="language" defaultValue={show.language} />
            <label>premierd</label>
            <input defaultValue={show.premiered || "not provided"} />
            <label>ended</label>
            <input defaultValue={show.ended || "on going"} />
            <label>Runtime</label>
            <input defaultValue={show.runtime || "not provided"} />
            <label>rating</label>
            <input defaultValue={show.rating.average || "not provided"} />
          </div>
        </Form>
        <button id="sum-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </>
  );
}

export default BookNow;
