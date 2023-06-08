import React, { useState } from "react";
import "./App.css";
import Movie from "./components/Moive";
import { getMovies } from "./MovieDummy";

function App() {
  const [movies, setMovies] = useState({});

  getMovies().then((response) => setMovies(response));

  return (
    <div className="App">
      {movies.results.map((item) => {
        return (
          <Movie
            key={item.title}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        );
      })}
    </div>
  );
}

export default App;
