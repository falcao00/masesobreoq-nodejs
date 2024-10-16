const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: 'localhost', 
    user:'root', 
    password: '159753456',
    database: 'controle_posts',
    connectionLimit: 5
});

module.exports = pool;