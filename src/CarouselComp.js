import React, { useEffect, useState } from "react";
import axios from "./apiHelper";
import requests from "./requests";
import { Carousel } from "react-bootstrap";

const base_uRL = "https://image.tmdb.org/t/p/original/";

function CarouselComp() {
  const [movies, setMovies] = useState([]);

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
      <Carousel className="carousel" controls={false} indicators={false}>
        {movies.slice(0, 3).map((movie) => (
          <Carousel.Item key={movie.id}>
            <div>
              <img
                className="carouselImage"
                src={`${base_uRL}${movie.backdrop_path}`}
              />
              <div
                style={{
                  marginTop: "-300px",
                  paddingBottom: "150px",
                  marginLeft: "50px",
                }}
              >
                <h1 className="carouselTitle">
                  {movie.title || movie.name || movie.original_name}
                </h1>
                <h3 className="carouselDescription">{movie.overview}</h3>
              </div>
            </div>
          </Carousel.Item>
        ))}
        
      </Carousel>
      
    </div>
  );
}

export default CarouselComp;
