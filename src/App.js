import React, { useState, useEffect } from "react";
import axios from "axios";
import ListFilm from "./components/ListFilm.js";
import { Input, Empty } from "antd";

function App() {
  const [film, setFilm] = useState([]);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [titleSearched, setTitleSearched] = useState();

  const apiUrl = "https://omdbapi.com/";
  const apiKey = "fc331929";

  useEffect(() => {
    axios
      .get("https://omdbapi.com/?t=Star%20Wars&apikey=" + apiKey)
      .then((res) => setFilm(res.data));
  }, []);

  function onSearch() {
    setLoading(true);
    axios
      .get(apiUrl + "?s=" + titleSearched + "&apikey=" + apiKey)
      .then((res) => {
        if (res.data.Search) {
          setError(null);
          setFilms(res.data.Search);
          setLoading(false);
        }
        if (res.data.Error) {
          setError(true);
          setLoading(false);
        }
      });
  }

  function getErrorView() {
    return (
      <Empty style={{ marginTop: 250 }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
    );
  }

  function getFilms() {
    return <ListFilm films={films} />;
  }

  return (
    <div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Input.Search
          placeholder="Cherchez un film"
          allowClear
          loading={loading}
          onChange={(e) => setTitleSearched(e.target.value)}
          onSearch={onSearch}
          style={{
            width: 250,
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      </div>
      {error ? getErrorView() : getFilms()}
    </div>
  );
}

export default App;
