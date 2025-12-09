import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import placeholderImg from '../../assets/img/video-6.jpg'; // صورة بديلة
import viewIcon from '../../assets/img/view-icon.svg';
import clockIcon from '../../assets/img/clock-icon.svg';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // كلمات بحث متنوعة لجلب مجموعة أكبر من الأفلام
  const searchTerms = ["batman", "spider", "matrix", "inception", "avengers"];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const promises = searchTerms.map(term =>
          fetch(`https://www.omdbapi.com/?apikey=13be964&s=${term}`)
            .then(res => res.json())
        );

        const results = await Promise.all(promises);
        const allMovies = results
          .filter(data => data.Search)
          .flatMap(data => data.Search);

        setMovies(allMovies);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className='container'>
      <div className="row row-cols-xxl-5 row-cols-lg-4 row-cols-sm-3 row-cols-2 row-cols-xxs-1 tt-inner-movies-row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="col" key={movie.imdbID}>
              <div className="tt-video">
                <Link to={`/MovieDetails/${movie.imdbID}`} className="tt-video__thumb">
                  <img 
                    src={movie.Poster !== "N/A" ? movie.Poster : placeholderImg} 
                    alt={movie.Title} 
                  />
                </Link>
                <div>
                  <a href="channel.html" className="tt-video__author">Movie</a>
                  <Link to={`/MovieDetails/${movie.imdbID}`} className="tt-video__title">
                    {movie.Title}
                  </Link>
                  <div className="tt-video__infos">
                    <span><img src={viewIcon} alt="icon"/> 16M views</span>
                    <span><img src={clockIcon} alt="icon"/> 49 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default Movies;
