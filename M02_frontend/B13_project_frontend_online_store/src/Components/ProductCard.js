import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { product } = this.props;
    localStorage.setItem(
      product.id,
      JSON.stringify(product),
    );
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <fieldset className="product-card">
        <div className="product-card-info-container">
          <Link
            to={ { pathname: `/product/${id}`, state: { product } } }
            data-testid="product-detail-link"
          >
            <section data-testid="product">
              <h4>{ title }</h4>
              <img className="product-card-image" src={ thumbnail } alt={ title } />
              <p>{ `Preço: R$ ${price}` }</p>
            </section>
          </Link>
        </div>
        <button
          className="product-card-button"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </fieldset>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
