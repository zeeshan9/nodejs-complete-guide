const Sequelize = require("sequelize")

const sequelize = new Sequelize('node-complete', 'root', 'root', {
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    host: 'localhost',/* by default it wil also set to localhost if we not provide it */
})

module.exports = sequelize;

/* Squelize uses mysql2 behind the scene */
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',   
//     password: 'root',

// })

// module.exports = pool.promise();