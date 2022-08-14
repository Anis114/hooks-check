import React from 'react';
import MovieCard from 'MovieCard';

import {useState} from 'react'
function MovieList({movielist}) {
  
    return (
        <div>
            {movielist.map((movie,key)=>{return (
                <MovieCard movie={movie}></MovieCard>
               );})}
        </div>
    );
}

export default MovieList;