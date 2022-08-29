// Referência: Gabriel Bueno, turma 12. Repositório: https://github.com/tryber/sd-012-project-talker-manager/pull/109/files.

const genaratesError = (ERROR_CODE) => {
  const { message, status } = ERROR_CODE;
  const newError = new Error(message);
  newError.status = status;
  return newError;
};

module.exports = genaratesError;
