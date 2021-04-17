require("dotenv").config();
const Pool = require("pg").Pool;

const { PGDATABASE, PGPASSWORD, PGHOST, PGPORT, PGUSER } = process.env;


const pool = new Pool ({
    user: PGUSER,
    password: PGPASSWORD,
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE
});

module.exports = pool; 
