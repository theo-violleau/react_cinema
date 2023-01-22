import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image, Statistic, Col, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const FilmPage = () => {
  const [film, setFilm] = useState([]);
  const [imDB, setImDB] = useState([]);
  const { imdbId } = useParams();
  let navigate = useNavigate();

  const apiUrl = "https://omdbapi.com/";
  const apiKey = "fc331929";

  useEffect(() => {
    axios.get(apiUrl + "?i=" + imdbId + "&apikey=" + apiKey).then((res) => {
      setFilm(res.data);
      setImDB(res.data.Ratings[0].Value);
    });
  }, []);

  return (
    <div>
      <div>
        <Row>
          <Col span={12}>
            <LeftOutlined
              onClick={() => navigate("/"   )}
              style={{ marginTop: 50, marginLeft: 50, fontSize: 40 }}
            />
          </Col>
          <Col span={12}>
            <p style={{ marginLeft: -105, fontSize: 40 }}>{film.Title}</p>
          </Col>
        </Row>
      </div>
      <Row
        style={{
          justifyContent: "left",
          display: "flex",
          marginTop: 20,
          marginLeft: 150,
        }}
      >
        <Col span={8}>
          <Image preview={false} width={240} src={film.Poster} />
        </Col>
        <Col span={8}>
          <Statistic
            style={{ marginLeft: -100 }}
            title="Réalisé par "
            value={film.Director}
          />
          <Statistic
            style={{ marginLeft: -100, marginTop: 20 }}
            title="Sorti en "
            value={film.Year}
            groupSeparator={""}
          />
          <Statistic
            style={{ marginLeft: -100, marginTop: 20 }}
            title="Scénariste(s) "
            value={film.Writer}
          />
          <Statistic
            style={{ marginLeft: -100, marginTop: 20 }}
            title="Avec"
            value={film.Actors}
          />
        </Col>
        <Col>
          <Statistic
            style={{ marginLeft: -100 }}
            title="Note IMDB"
            value={imDB}
          />

          <Statistic
            style={{ marginLeft: -100, marginTop: 20 }}
            title="Durée"
            value={film.Runtime}
          />
          <Statistic
            style={{ marginLeft: -100, marginTop: 20 }}
            title="Genre(s)"
            value={film.Runtime}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FilmPage;
