// Referência: Gabriel Bueno, turma 12. Repositório: https://github.com/tryber/sd-012-project-talker-manager/pull/109/files.

const TALKER_NOT_FOUND = {
  message: 'Pessoa palestrante não encontrada',
  status: 404,
};

const EMAIL_REQUIRED = {
  message: 'O campo "email" é obrigatório',
  status: 400,
};

const INVALID_EMAIL_FORMAT = {
  message: 'O "email" deve ter o formato "email@email.com"',
  status: 400,
};

const PASSWORD_REQUIRED = {
  message: 'O campo "password" é obrigatório',
  status: 400,
};

const INVALID_PASSWORD_FORMAT = {
  message: 'O "password" deve ter pelo menos 6 caracteres',
  status: 400,
};

const TOKEN_NOT_FOUND = {
  message: 'Token não encontrado',
  status: 401,
};

const INVALID_TOLKEN = {
  message: 'Token inválido',
  status: 401,
};

const NAME_REQUIRED = {
  message: 'O campo "name" é obrigatório',
  status: 400,
};

const INVALID_NAME = {
  message: 'O "name" deve ter pelo menos 3 caracteres',
  status: 400,
};

const AGE_REQUIRED = {
  message: 'O campo "age" é obrigatório',
  status: 400,
};

const INVALID_AGE = {
  message: 'A pessoa palestrante deve ser maior de idade',
  status: 400,
};

const INVALID_WATCHEDAT_FORMAT = {
  message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  status: 400,
};

const INVALID_RATE = {
  message: 'O campo "rate" deve ser um inteiro de 1 à 5',
  status: 400,
};

const TALK_REQUIRED = {
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  status: 400,
};

module.exports = {
  TALKER_NOT_FOUND,
  EMAIL_REQUIRED,
  INVALID_EMAIL_FORMAT,
  PASSWORD_REQUIRED,
  INVALID_PASSWORD_FORMAT,
  TOKEN_NOT_FOUND,
  INVALID_TOLKEN,
  NAME_REQUIRED,
  INVALID_NAME,
  AGE_REQUIRED,
  INVALID_AGE,
  INVALID_WATCHEDAT_FORMAT,
  INVALID_RATE,
  TALK_REQUIRED,
};
