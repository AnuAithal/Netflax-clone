import React from "react";
import requests from "./requests";
import Cards from "./Cards";
import CarouselComp from "./CarouselComp";
import NavBar from "./NavBar";

function Home() {
  return (
    <div >
      <NavBar />
      <CarouselComp />
      <Cards  
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Cards title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Cards title="Action" fetchUrl={requests.fetchActionMovies} />
      <Cards title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Cards title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Cards title="Horror" fetchUrl={requests.fetchHorrorMovies} />

      
    </div>
  );
}

export default Home;
