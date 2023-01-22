import React from "react";
import { Card, Col } from "antd";
import { useNavigate } from "react-router-dom";

const Film = ({ film }) => {
  let navigate = useNavigate();

  return (
    <div>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          style={{ width: 200, margin: 10 }}
          hoverable={true}
          cover={<img src={film.Poster} alt={film.Title} />}
          onClick={() => navigate("/films/" + film.imdbID)}
        >
          <Card.Meta
            style={{ alignContent: "center" }}
            title={film.Title}
            description={film.Year}
          />
        </Card>
      </Col>
    </div>
  );
};

export default Film;
