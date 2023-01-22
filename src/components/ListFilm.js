import React from "react";
import Film from "./Film";
import { Row } from "antd";

const ListFilm = ({ films }) => {
  return (
    <div>
      <Row gutter={16}>
        {films.map((film) => (
          <Film key={film.imdbID} film={film} />
        ))}
      </Row>
    </div>
  );
};

export default ListFilm;
