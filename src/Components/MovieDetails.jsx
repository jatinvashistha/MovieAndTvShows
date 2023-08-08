 // MovieDetails.js
import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div id="contact">
      <img src={movie.show?.image?.medium || 'placeholder_image_url'} alt="no poster" />
      <div className="details">
        <h4>{movie.show?.name && "Name : "} {movie.show?.name} </h4>
        <h4>{movie.show?.premiered && "Year : "} {movie.show?.premiered}</h4>
        <h4>{movie.show?.type && "Type : "} {movie.show?.type}</h4>
       <h4>{movie.show?.language && "Language : "} {movie.show?.language}</h4>
       <h4>{movie.show?.officialSite && "Site : "} {movie.show?.officialSite}</h4>
       <h4>{movie.show?.averageRuntime && "Runtime : "} {movie.show?.averageRuntime}</h4>

      </div>
    </div>
  );
};

export default MovieDetails;
