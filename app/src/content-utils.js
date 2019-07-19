import constants from './constants.js';
import dateUtils from './date-utils.js';

function getGreeting(name) {
  if (!name || name.trim().length === 0) {
    name = constants.DEFAULT_NAME;
  }

  return `hello ${name}`
}

function getTime() {
  const now = dateUtils.getDate();
  return `${now.getHours()}:${now.getMinutes()}`
}

export default {
  getGreeting,
  getTime
}