import React from "react";
import "./Card.css";

export default function Card({ source, title, url }) {
  return (
    <div className="cardContainer">
      <a href={url} target="_blank">
        <img src={source} alt={title} />
      </a>
    </div>
  );
}
