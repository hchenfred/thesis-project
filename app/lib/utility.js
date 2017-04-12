const formatTime = (time) => {
  const sliced = time.substring(0, time.length - 3);
  return `${sliced}:00`;
};

module.exports.formatTime = formatTime;
