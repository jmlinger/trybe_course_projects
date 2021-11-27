// Adaptado de: Kevin Oliveira, turma 12, Repositório: https://github.com/tryber/sd-012-store-manager/pull/87/files.
const { StatusCodes } = require('http-status-codes');

const invalidData = (error) => {
  if (error.details) {
    const { message } = error.details[0]; // a validação de Joi retorna um obj error que contem um atributo message seguindo esse caminho.
    return {
      status: StatusCodes.UNPROCESSABLE_ENTITY,
      code: 'invalid_data',
      message,
    };
  }
  return {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: error.message,
  };
};

module.exports = {
  invalidData: (error) => invalidData(error),
};
