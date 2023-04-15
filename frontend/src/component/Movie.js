import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

axios.defaults.baseURL = "http://localhost:8000";
function Movie() {
  const movie_name = useRef();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [notFound, setNotFound] = useState("");
  useEffect(() => {
    navigate("/");
  }, []);
  const handleMovieSearch = async (event) => {
    event.preventDefault();
    let movieName = movie_name.current.value;

    navigate({
      pathname: "/",
      search: "?title=" + movieName + "",
    });
    try {
      let movie_data = await axios.get(`/movie/?title=${movieName}`);
      if (movie_data.data.data) {
        setMovies(movie_data.data.data);
        setNotFound("");
      } else {
        setNotFound("NO MOVIES MATCHES YOUR SEARCH CRITERIA");
        setMovies([]);
      }
    } catch (error) {
      console.log(error);
    }

    movie_name.current.value = "";
  };
  return (
    <div className="container my-3">
      <h1>SEARCH MOVIE HERE:</h1>
      <form method="GET" onSubmit={handleMovieSearch}>
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control mx-1"
            placeholder="Enter Movie Name"
            ref={movie_name}
            name="movieName"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <h5 className="text-center text-danger">{notFound}</h5>
        {movies?.map((movie) => {
          return (
            <div className="col-4 my-3" key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
