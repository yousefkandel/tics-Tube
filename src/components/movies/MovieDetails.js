import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import placeholderImg from '../../assets/img/video-6.jpg'; // صورة بديلة

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);

  const trailerLinks = {
    "tt0848228": "https://www.youtube.com/embed/PssKpzB0Ah0",
    "tt4154796": "https://www.youtube.com/embed/TcMBFSGVi1c",
    "tt1375666": "https://www.youtube.com/embed/6ZfuNTqbHE8",
    "tt0816692": "https://www.youtube.com/embed/tmeOjFno6Do",
    "tt0468569": "https://www.youtube.com/embed/YoHD9XEInc0",
    "tt0109830": "https://www.youtube.com/embed/zSWdZVtXT7E",
    "tt0133093": "https://www.youtube.com/embed/EXeTwQWrcwY",
    "tt0120737": "https://www.youtube.com/embed/sY1S34973zA",
    "tt0114369": "https://www.youtube.com/embed/oHg5SJYRHA0",
    "tt0137523": "https://www.youtube.com/embed/2k1f1p2Pa58",
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=13be964&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));

    // مثال لجلب 4 أفلام مشابهة
    fetch(`http://www.omdbapi.com/?apikey=13be964&s=action`)
      .then(res => res.json())
      .then(data => {
        if(data.Search) setSimilarMovies(data.Search.slice(0,4));
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p>Loading movie details...</p>;

  const trailerUrl = trailerLinks[movie.imdbID] || "https://www.youtube.com/embed/PssKpzB0Ah0";

  return (
    <div className="container my-4">
      <div className="row">
        {/* الجزء الأيسر */}
        <div className="col-md-8">
          <div className="mb-3">
            <iframe
              width="100%"
              height="400"
              src={trailerUrl}
              title={`${movie.Title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>

          {/* كومنتات ثابتة */}
          <div className="mt-4">
            <h5>Comments</h5>
            <div>
              <p><strong>@User1:</strong> Loved this movie!</p>
              <p><strong>@User2:</strong> Amazing plot and visuals.</p>
              <p><strong>@User3:</strong> Could watch it again and again.</p>
              <p><strong>@User4:</strong> The best movie of the year.</p>
            </div>
          </div>
        </div>

        {/* الجزء الأيمن */}
        <div className="col-md-4">
          <h5>Similar Movies</h5>
          {similarMovies.map((sm) => (
            <div key={sm.imdbID} className="mb-3 d-flex">
              <img 
                src={sm.Poster !== "N/A" ? sm.Poster : placeholderImg} 
                alt={sm.Title} 
                style={{ width: '80px', height: '120px', objectFit: 'cover', marginRight: '10px' }}
              />
              <div>
                <Link to={`/MovieDetails/${sm.imdbID}`} className="d-block">{sm.Title}</Link>
                <small>{sm.Year}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
