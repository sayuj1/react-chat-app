import moment from 'moment';

export const getCurrentTime = () => {
  return moment().format('h:mm a');
};
