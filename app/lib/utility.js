const formatTime = (time) => {
  const sliced = time.substring(0, time.length - 3);
  return `${sliced}:00`;
};

const addParticipantsToDB = (eventId, friendList) => {
  fetch('http:127.0.0.1:5000/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'good',
      email: 'mogutounew@yahoo.com.net',
    }),
  })
  .then(data => console.log('save user to DB'))
  .catch(err => console.log(err));
};

module.exports.formatTime = formatTime;
module.exports.addParticipantsToDB = addParticipantsToDB;
