const { StatusCodes } = require('http-status-codes');
const Service = require('../../service/sales');

module.exports = async (req, res, _next) => {
    const { id } = req.params;

    const productById = await Service.findById(id);

    res.status(StatusCodes.OK).json(productById);
};
