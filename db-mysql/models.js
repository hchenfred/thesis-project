
var mysql = require('mysql');
var mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);
var Bluebird = require('bluebird');
const db = Bluebird.promisifyAll(connection);

if (process.env.NODE_ENV === 'production') {
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
}

// to run: mysql -u userName -p database_name < file.sql

// Create functions that query the databases
/* exampele querry
var queryName = function(cb) {
  connection.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      cb(null, results);
    }
	});
}
*/

// Queries related to getting user data for suggestion algorithm

var getUserInterests = (userName, cb) => {
  connection.query(`SELECT name FROM interests INNER JOIN  users WHERE \ 
    users.userName = ${userName};`, (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
  });
} 

var getUserActivities = (userName, cb) => {
  connection.query(`SELECT name, category FROM activities INNER JOIN ___ INNER JOIN ___ \ 
    WHERE users.userName = ${userName} \ && `)

} 

var getAllUserVotes = (userName, cb) => {
  connection.query(`SELECT  name, category FROM activites`)
}

var getAllEventComments = (eventName, cb) => {
  connection.query(`SELECT * FROM comments __ JOIN WHERE event.name =\"${eventName}\" && \
    event.id = comment.event_id`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, err);
    }
  });
}

const getUserByEmail = (email) => {
  const queryStr = 'SELECT * FROM users WHERE email = ? LIMIT 1';
  return db.queryAsync(queryStr, [email]);
};

const addEvent = (event) => {
  const queryStr = 'INSERT INTO events SET ?';
  return db.queryAsync(queryStr, event);
};

const addParticipants = (eventId, email) => {
  const queryStr = 'INSERT INTO participants(user_id, event_id) SELECT id, ? FROM users WHERE email = ?';
  return db.queryAsync(queryStr, [eventId, email]);
};

const addUserToDatabase = (user) => {
  const queryStr = 'INSERT IGNORE INTO users SET ?';
  return db.queryAsync(queryStr, user);
};

var getPublicEvents = (cb) => {
  connection.query('SELECT events.*, users.username, users.photourl FROM events INNER JOIN users ON events.creator_id = users.id;', (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      let counter = 1;
      results.forEach((event) => {
        event.id = counter;
        counter += 1;
      });
      console.log('getPublicEvents query ----->', results);
      cb(null, results);
    }
  });
};

// Test models
var selectAllFromTest = (cb) => {
  connection.query('SELECT * FROM test', (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

var insertValueIntoTest = (val, cb) => {
  connection.query(`INSERT INTO test (value) VALUES ${val};`, (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
  });
};


module.exports = {
  selectAllFromTest,
  insertValueIntoTest,
  addUserToDatabase,
  getUserByEmail,
  addEvent,
  getPublicEvents,
  addParticipants,
};
