import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const apiKey = "13be964";
const movieIds = [
  "tt1375666", "tt0816692", "tt0468569",
  "tt0109830", "tt0133093", "tt4154796",
  "tt0120737", "tt0114369", "tt0137523", "tt0848228"
];

function Top10Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const requests = movieIds.map(id => 
          axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
        );
        const responses = await Promise.all(requests);
        setMovies(responses.map(res => res.data));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <section className="tt-2-top-10 tt-section-spacing">
      <div className="tt-2-container">
        <h2 className="tt-2-section-title">TOP 10 MOVIES TO WATCH</h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          slidesPerView={5}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.imdbID}>
              <div className="tt-2-top-10-item">
                <div className="tt-2-top-10-item-img">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
                <span className="number">{(index + 1).toString().padStart(2, "0")}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Top10Movies;
