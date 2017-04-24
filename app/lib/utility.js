import endpoint from '../config/global';

const baseURL = endpoint.baseURL;

const formatTime = (time) => {
  const sliced = time.substring(0, time.length - 3);
  return `${sliced}:00`;
};

const isEventPast = (event) => {
  // 2017-02-27T08:00:00.000Z
  // 16:12:12
  // 2017-02-27T16:12:12
  const eventEndTime = formatTime(event.endTime);
  const eventDate = event.eventDate;
  const currentTime = new Date(Date.now());
  const eventTime = new Date(`${eventDate.substring(0, 10)}T${eventEndTime}`);
  return (currentTime - eventTime > 0) ? true : false;
};

const addParticipantsToDB = (eventId, friendList, host, eventName) => {
  return fetch(`${baseURL}/participants`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventId,
      friendList,
      host,
      eventName,
    }),
  })
  .then(data => console.log('successfully save participant data to DB'))
  .catch(err => console.log('error when saving participants to DB'));
};

module.exports.formatTime = formatTime;
module.exports.addParticipantsToDB = addParticipantsToDB;
module.exports.isEventPast = isEventPast;
