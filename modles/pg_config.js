const Pool = require("pg").Pool;
const pg_conn = new Pool({
  user: "vvljeiarvptcej",
  host: "ec2-34-228-154-153.compute-1.amazonaws.com",
  database: "d6ggvgvsv5dvct",
  password: "c0ef2aa94ed3bae67429273d35392736462ed8129aafbb70ff68eae2f3ff2739",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports = pg_conn;
