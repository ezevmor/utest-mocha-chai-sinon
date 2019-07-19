import constants from './constants.js';

function getGreeting(name) {
  if (!name || name.trim().length === 0) {
    name = constants.DEFAULT_NAME;
  }

  return `hello ${name}`
}

function getTime() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`
}

export default {
  getGreeting,
  getTime
}