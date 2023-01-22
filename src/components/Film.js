import React from "react";
import { Card, Col } from "antd";

const Film = ({ film }) => {
  return (
    <div>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          style={{ width: 200, margin: 10 }}
          hoverable={true}
          cover={<img src={film.Poster} alt={film.Title} />}
        >
          <Card.Meta
            style={{ alignContent: "center" }}
            description={film.Title}
          />
        </Card>
      </Col>
    </div>
  );
};

export default Film;
