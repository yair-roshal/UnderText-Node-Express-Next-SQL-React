require('dotenv').config();

console.log('DB_HOST', process.env.DB_HOST)

module.exports = {
  sqlConfig: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'default_db',
  },
  
};


//localhost

// module.exports = Object.freeze({
//     sqlConfig: {
//         connectionLimit: 10,
//         host: 'localhost',
//         user: 'root',
//         // password: '',
//         password: 'root',
//         database: 'under-text',
//     },
//     ANOTHER_CONSTANT: 'another value',
// })
