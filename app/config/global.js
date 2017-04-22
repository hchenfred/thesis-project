let baseURL;

// allows for multiuse url
// to switch to heroku server, change 'production' in line 5 to 'development';
// to switch to local server, change 'development' in line 5 to 'production'
if (process.env.NODE_ENV === 'development') {
  baseURL = 'https://hst-friend-ly.herokuapp.com';
} else if (process.env.NODE_ENV === 'staging') {
  baseURL = 'https://hst-friend-ly-staging.herokuapp.com';
} else {
  baseURL = 'http://127.0.0.1:5000';
}
module.exports = {
  baseURL,
};
