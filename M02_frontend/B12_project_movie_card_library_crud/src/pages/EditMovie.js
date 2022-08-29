import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };

    this.FetchMovie = this.FetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.FetchMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { status: 'loading' },
      async () => {
        await movieAPI.updateMovie(updatedMovie); // retorna API totalmente tratada.
        this.setState({
          status: '',
          shouldRedirect: true,
        });
      },
    );
  }

  async FetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState(
      { status: 'loading' },
      async () => {
        const movieFromData = await movieAPI.getMovie(id); // retorna API totalmente tratada.
        this.setState({
          status: '',
          movie: movieFromData,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
