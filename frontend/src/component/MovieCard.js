import React from "react";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <div className="card" style={{ width: "18rem", heigth: "700px" }}>
      <img
        className="card-img-top"
        src={movie.Poster}
        alt={movie.Title}
        height="300px"
      />
      <div className="card-body">
        <h6 className="card-title">{movie.Title}</h6>
        <p className="card-text">Released : {movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary w-100">
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
