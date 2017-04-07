module.exports = {
  connectionLimit: 10,
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'b242f278d640f4',
  password: process.env.CLEARDB_PASS,
  database: 'heroku_ef4fd70c5cecf6a',
};

// uncomment if not in deployment
// module.exports = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'friendly',
// };
