import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import { render } from 'enzyme';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };

    this.FetchMovie = this.FetchMovie.bind(this);
    this.renderMovieDetails = this.renderMovieDetails.bind(this);
  }

  componentDidMount() {
    this.FetchMovie();
  }

  async FetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState(
      { loading: true },
      async () => {
        const movieFromData = await movieAPI.getMovie(id); // retorna API totalmente tratada.
        this.setState({
          loading: false,
          movie: movieFromData,
        });
      },
    );
  }

  renderMovieDetails() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <ul>
          <li><Link to={ `/movies/${id}/edit` }>EDITAR</Link></li>
          <li><Link to="/">VOLTAR</Link></li>
        </ul>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        { loading ? <Loading /> : this.renderMovieDetails() }
      </div>
    );
  }
}
export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
