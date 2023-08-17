import React, { useEffect, useState } from "react";
import axios from "./apiHelper";
import { useNavigate } from "react-router-dom";

const base_uRL = "https://image.tmdb.org/t/p/original/";

function Cards({ title, fetchUrl, isLargeRow }) {
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

  function truncateText(text, maxWords, maxChars) {
    if (!text) {
      return "";
    }

    const words = text.split(" ");
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(" ");

    if (truncatedText.length > maxChars) {
      return truncatedText.slice(0, maxChars) + "...";
    }

    return truncatedText;
  }

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
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content">
            <img src={`${base_uRL}${selectedImage?.backdrop_path}`} />

            <div
              className="modal-items"
              style={{
                display: "flex",
                padding: "10px",
                marginLeft: "12px",
                gap: "20px",
              }}
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
              <h3>{selectedImage?.title || selectedImage?.name}</h3>
              <p style={{ maxWidth: "500px", fontSize: "16px" }}>
                {truncateText(selectedImage?.overview, 200, 420)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
