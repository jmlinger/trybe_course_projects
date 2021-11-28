const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/sales');

module.exports = async (_req, res, _next) => {
    const list = await Service.find();

    res.status(StatusCodes.OK).json({ sales: list });
};
