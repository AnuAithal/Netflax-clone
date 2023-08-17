import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import requests from "./requests";
import Movies from "./Movies";
import Login from "./Login";
import Signin from "./Signin";
import MovieTrailer from "./MovieTrailer";
// import SearchResults from "./SearchResults";

function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/movies"
            element={<Movies fetchUrl={requests.fetchActionMovies} />}
          />
          <Route path="/movietrailer/:id" element={<MovieTrailer />} />
          {/* <Route path="/search" element={<SearchResults />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
