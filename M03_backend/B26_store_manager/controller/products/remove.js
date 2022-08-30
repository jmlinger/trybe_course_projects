const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/products');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Service.remove(id);

    res.status(StatusCodes.OK).json(deletedProduct);
  } catch (err) {
    next(err);
  }
};
