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
        <div className="modal-overlay">
          <div className="modal-content">
            <img
              src={`${base_uRL}${selectedImage?.backdrop_path}`}
              onClick={handleModalClose}
            />
            <div style={{ padding: "10px", marginLeft: "12px", gap: "20px" }}>
              <button
                style={{
                  width: "100px",
                  borderRadius: "5px",
                  paddingRight: "25px",
                }}
                onClick={() => handleTrailer(selectedImage)}
              >
                Play
              </button>
              <img
                style={{
                  width: "20px",
                  marginLeft: "-25px",
                  marginTop: "-5px",
                }}
                
                src="https://cdn-icons-png.flaticon.com/128/527/527995.png"
              />
              <button
                style={{
                  width: "100px",
                  borderRadius: "5px",
                  paddingRight: "23px",
                  marginLeft: "17px",
                }}
              >
                My List
              </button>
              <img
                style={{
                  width: "20px",
                  marginLeft: "-25px",
                  marginTop: "-5px",
                }}
                src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
              />
            </div>
            <div style={{ color: "white", padding: "20px" }}>
              <h3>{selectedImage?.title}</h3>
              <p style={{ maxWidth: "450px" }}>{selectedImage?.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
