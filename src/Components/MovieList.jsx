 // MovieList.js
import React from 'react';
import MovieDetails from './MovieDetails';

const MovieList = ({ movieList }) => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <div className="move">
        {movieList.map((movie) => (
          <div key={movie.show.id}>
            <a className="list" href="#contact" onClick={() => handleClick(movie)}>
              <h3>{movie.show.name}</h3>
              <img
                src={movie.show.image?.medium || 'placeholder_image_url'}
                alt={movie.show.name}
                style={{ width: '30px', height: '30px' }}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="hello">
        {selectedMovie ? <MovieDetails movie={selectedMovie} /> : <h4 className="omit"></h4>}
      </div>
    </>
  );
};

export default MovieList;
