import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.FetchMovies = this.FetchMovies.bind(this);
    this.renderMovieList = this.renderMovieList.bind(this);
  }

  componentDidMount() {
    this.FetchMovies();
  }

  async FetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const moviesFromData = await movieAPI.getMovies(); // retorna API totalmente tratada.
        this.setState({
          loading: false,
          movies: moviesFromData,
        });
      },
    );
  }

  renderMovieList() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <p>{ (loading) ? <Loading /> : this.renderMovieList() }</p>
    );
  }
}

export default MovieList;
