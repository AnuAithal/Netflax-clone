import React, { useEffect, useState } from "react";
import axios from "./apiHelper";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import CarouselComp from "./CarouselComp";

const base_uRL = "https://image.tmdb.org/t/p/original/";

function Cards({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <div className="row" style={{ color: "white", marginLeft: "10px" }}>
        <h5>{title}</h5>
        <div className="container">
          {movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              className={`posters ${isLargeRow && "postersLarge"}`}
              src={`${base_uRL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              
            />
          ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Cards;
