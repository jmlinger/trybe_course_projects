// Adaptado de: Kevin Oliveira, turma 12, Repositório: https://github.com/tryber/sd-012-store-manager/pull/87/files.
const { StatusCodes } = require('http-status-codes');

const invalidData = (errorOrMessage) => {
  if (errorOrMessage instanceof Error) { // O operador instanceof testa se um objeto tem, em seu prototype, a função construtora. Vide: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof.
    const { message } = errorOrMessage.details[0]; // a validação de Joi retorna um obj error que contem um atributo message seguindo esse caminho.
    return {
      status: StatusCodes.UNPROCESSABLE_ENTITY,
      code: 'invalid_data',
      message,
    };
  }
  return {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: errorOrMessage,
  };
};

const notFound = (errorOrMessage) => {
  if (errorOrMessage instanceof Error) { // O operador instanceof testa se um objeto tem, em seu prototype, a função construtora. Vide: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof.
    const { message } = errorOrMessage.details[0]; // a validação de Joi retorna um obj error que contem um atributo message seguindo esse caminho.
    return {
      status: StatusCodes.NOT_FOUND,
      code: 'not_found',
      message,
    };
  }
  return {
    status: StatusCodes.NOT_FOUND,
    code: 'not_found',
    message: errorOrMessage,
  };
};

module.exports = {
  invalidData: (errorOrMessage) => invalidData(errorOrMessage),
  invalidId: () => invalidData('Wrong id format'),
  notFound: () => notFound('Sale not found'),
};
