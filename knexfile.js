require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/orderup"
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
  }

};
