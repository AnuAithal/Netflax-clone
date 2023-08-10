import axios from "axios";
import movieTrailer from "movie-trailer";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import NavBar from "./NavBar";

const MovieTrailer = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=243e4c829c03af820debe020b717349b`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(movie);

  const opts = {
    height: "540px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const handleClick = () => {
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
    handleClick();
  }, [movie]);

  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      {trailerUrl && (
        <div style={{paddingTop:'60px'}}>
          <Youtube
            style={{ objectFit: "cover" }}
            videoId={trailerUrl}
            opts={opts}
          />
        </div>
      )}
    </div>
  );
};

export default MovieTrailer;
