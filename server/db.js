const Pool = require("pg").Pool;
require("dotenv").config();
const { PGDATABASE, PGPASSWORD, PGHOST, PGPORT, PGUSER } = proces.env;


const pool = new Pool ({
    user: PGUSER,
    password: PGPASSWORD,
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE

});

module.exports = pool; 
