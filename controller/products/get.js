const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/products');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const productById = await Service.findById(id);

    res.status(StatusCodes.OK).json(productById);
  } catch (err) {
    next(err);
  }
};
