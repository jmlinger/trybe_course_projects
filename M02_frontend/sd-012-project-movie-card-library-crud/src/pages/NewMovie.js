import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMovieForm = this.renderMovieForm.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie); // retorna API totalmente tratada.
    this.setState({
      shouldRedirect: true,
    });
  }

  renderMovieForm() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  render() {
    const { shouldRedirect } = this.state;

    return (
      <div>
        { (shouldRedirect) ? <Redirect to="/" /> : this.renderMovieForm() }
      </div>
    );
  }
}
export default NewMovie;
