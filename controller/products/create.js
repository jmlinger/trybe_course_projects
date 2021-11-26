const { StatusCodes } = require('http-status-codes');
const productService = require('../../service/products');

module.exports = async (req, res, next) => {
  try {
    const product = req.body;
    const newProduct = await productService.create(product);

    return res.status(StatusCodes.CREATED).json(newProduct);
  } catch (err) {
    next(err);
  }
};
