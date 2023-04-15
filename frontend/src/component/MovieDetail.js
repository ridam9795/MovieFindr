import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetail() {
  const { imdbID } = useParams();
  axios.defaults.baseURL = "http://localhost:8000";
  const [currMovie, setCurrMovie] = useState({});
  const [notFound, setNotFound] = useState("");

  useEffect(() => {
    fetchMovieDetail();
  }, [imdbID]);
  const fetchMovieDetail = async () => {
    setNotFound("Loading..");
    try {
      let movieData = await axios.get(`/movieDetail/${imdbID}`);

      if (!movieData.data.data.Error) {
        setCurrMovie(movieData.data.data);
        setNotFound("");
      } else {
        setNotFound("INVALID IMDB ID");
        setCurrMovie({});
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  return (
    <div className="container my-5">
      {notFound.length > 0 ? (
        <h1 className="text-center text-dark">{notFound}</h1>
      ) : (
        <div className="row justify-content-center  bg-dark">
          <div className="col-3 mx-4 mt-4 ">
            <img src={currMovie.Poster} alt={currMovie.Title} heigth="500px" />
          </div>
          <div className="col-7 mx-4 mt-4 text-white bg-dark">
            <h2>{currMovie.Title}</h2>
            <div className="container my-4">
              <p>Released : {currMovie.Released}</p>
              <p>Genre : {currMovie.Genre}</p>
              <p>Runtime : {currMovie.Runtime}</p>
              <p>Director : {currMovie.Director}</p>
              <p>Writer : {currMovie.Writer}</p>
              <p>Actors : {currMovie.Actors}</p>
              <p>Plot : {currMovie.Plot}</p>
              <p>Language : {currMovie.Language}</p>
              <p>Country : {currMovie.Country}</p>
              <p>imdbRating : {currMovie.imdbRating}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
