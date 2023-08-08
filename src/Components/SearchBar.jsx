 // SearchBar.js
import React, { useState } from 'react';
import MovieList from './MovieList';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  const seeValues = async () => {
    try {
      if (input === '') {
        alert('Please write anything.');
      } else {
        const BASE_URL = 'https://api.tvmaze.com';
        const res = await fetch(`${BASE_URL}/search/shows?q=${input}`);
        const data = await res.json();
        console.log(data);
        setMovies(data);
        setInput('');
      }
    } catch (error) {
      console.log('Error fetching shows:', error);
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>
          Search <span>Movies | Serial | Shows</span>
        </h1>
      </div>

      <div className="SearchBar">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={seeValues}>Search</button>
      </div>

      <MovieList movieList={movies} />
    </div>
  );
};

export default SearchBar;
