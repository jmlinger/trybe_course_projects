const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/products');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = req.body;

    const updatedProduct = await Service.update(id, product);
    res.status(StatusCodes.OK).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};
