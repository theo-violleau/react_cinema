import React, { useState, useEffect } from "react";
import axios from "axios";
import ListFilm from "./components/ListFilm.js";

function App() {
  const [film, setFilm] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://omdbapi.com/?t=Star%20Wars&apikey=fc331929")
      .then((res) => setFilm(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://omdbapi.com/?s=Star%20Wars&apikey=fc331929")
      .then((res) => setFilms(res.data.Search));
  }, []);

  console.log(films);

  return (
    <div>
      <ListFilm films={films} />
    </div>
  );
}

export default App;
