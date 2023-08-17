import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const base_uRL = "https://image.tmdb.org/t/p/original/";

const Movies = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (movie) => {
    setSelectedImage(movie);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleTrailer = (movie) => {
    navigate(`/movietrailer/${movie?.id}`);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=243e4c829c03af820debe020b717349b&with_genres=28"
      );
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <NavBar />
      <div className="movies">
        {movies.map((movie) => (
          <img
            className="postersLargeM"
            src={`${base_uRL}${movie.backdrop_path}`}
            onClick={() => {
              handleClick(movie);
            }}
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content">
            <img
              src={`${base_uRL}${selectedImage?.backdrop_path}`}
              
            />
            <div
              className="modal-items"
              style={{ display:'flex',padding: "10px", marginLeft: "12px", gap: "20px" }}
            >
              <div
                className="modal-button"
                onClick={() => handleTrailer(selectedImage)}
              >
                ▶ Play
              </div>

              <div className="modal-button">+ My List</div>
            </div>
            <div style={{ color: "white", paddingLeft: "20px" }}>
              <h3>{selectedImage?.title}</h3>
              <p className="modal-overview">
                {selectedImage?.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
