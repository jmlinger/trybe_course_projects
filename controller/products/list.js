const { StatusCodes } = require('http-status-codes');
const productService = require('../../service/products');

module.exports = async (_req, res, next) => {
  try {
    const filteredProducts = await productService.find();

    res.status(StatusCodes.OK).json(filteredProducts);
  } catch (err) {
    next(err);
  }
};