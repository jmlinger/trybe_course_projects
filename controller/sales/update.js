const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/sales');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const sale = req.body;

  const updatedSale = await Service.update(id, sale);

  res.status(StatusCodes.OK).json(updatedSale);
};
