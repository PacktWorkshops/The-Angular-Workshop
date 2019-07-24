const bcrypt = require('bcryptjs');

exports.first = array => array[0];

exports.serialize = (item) => {
  const serialized = Object.assign({}, item);
  delete serialized.password;
  delete serialized.$loki;
  return serialized;
}

exports.serializeArray = (items) => {
  return {
    items: items.map(item => this.serialize(item))
  }
}

exports.UTC = (date) => {
  date = new Date(date);
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
}

exports.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);


exports.validPassword = (passwordFromClient, passwordFromdatabase) => {
  return bcrypt.compareSync(passwordFromClient, passwordFromdatabase);
};