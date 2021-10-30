const moment = require('moment');

const emailChecker = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const dateChecker = (date) =>
  moment(date, 'DD/MM/YYYY', true).isValid();

module.exports = {
  emailChecker,
  dateChecker,
};
