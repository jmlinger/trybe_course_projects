const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/sales');

module.exports = async (req, res, _next) => {
  const sales = req.body;
  
  const newSales = await Service.create(sales);

  return res.status(StatusCodes.OK).json(newSales);
};
