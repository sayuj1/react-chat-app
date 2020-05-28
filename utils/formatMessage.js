const moment = require('moment');

const formatMessage = message => {
  return {
    ...message,
    sendTime: moment().format('h:mm a'),
  };
};

module.exports = formatMessage;
