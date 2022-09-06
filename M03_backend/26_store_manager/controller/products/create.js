const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/products');

module.exports = async (req, res, next) => {
  try {
    const product = req.body;
    const newProduct = await Service.create(product);

    return res.status(StatusCodes.CREATED).json(newProduct);
  } catch (err) {
    next(err);
  }
};
