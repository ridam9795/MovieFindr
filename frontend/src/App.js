import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Movie from "./component/Movie";
import MovieDetail from "./component/MovieDetail";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Movie />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
