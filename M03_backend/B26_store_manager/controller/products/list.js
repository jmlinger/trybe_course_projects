const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/products');

module.exports = async (_req, res, next) => {
  try {
    const list = await Service.find();

    res.status(StatusCodes.OK).json({ products: list });
  } catch (err) {
    next(err);
  }
};
