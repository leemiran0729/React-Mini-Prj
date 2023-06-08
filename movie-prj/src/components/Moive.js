import React from "react";
import "./Movie.css";

export default function Movie({ title, poster_path, vote_average }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movie-container">
      <img src={BASE_URL + poster_path} alt={title + "영화 포스터"} />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
