import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {



  // title: 'Choux and Maru',
  //   IMDBRating: 4,
  //   genres: ['cats', 'drama', 'romance'],
  //   poster: 'choux-maru-part-1'


  generateMovieCards = () => {
      return movieData.map((item, index) => 
      <MovieCard
        key ={index}
        title={item.title}
        IMDBRating={item.IMDBRating}
        genres={item.genres}
        poster={item.poster}
      />
      )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
