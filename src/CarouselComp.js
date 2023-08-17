import React, { useEffect, useState } from "react";
import axios from "./apiHelper";
import requests from "./requests";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const base_uRL = "https://image.tmdb.org/t/p/original/";

function CarouselComp() {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const handleTrailer = (movie) => {
    navigate(`/movietrailer/${movie?.id}`);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovies(request.data.results);
      return movies;
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="carousel-shadow"></div>
      <Carousel className="carousel" controls={false} indicators={false}>
        {movies.slice(0, 3).map((movie) => (
          <Carousel.Item className="carousel-item" key={movie.id}>
            <div>
              <img
                className="carouselImage"
                src={`${base_uRL}${movie.backdrop_path}`}
              />
              <div className="carouselItems">
                <h1 className="carouselTitle">
                  {movie.title || movie.name || movie.original_name}
                </h1>
                <h3 className="carouselDescription">{movie.overview}</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleTrailer(movie)}
                    className="carousel-button"
                  >
                    ▶ Play
                  </button>
                  <button className="carousel-button info">ⓘ More Info</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
