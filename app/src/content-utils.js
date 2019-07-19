function getGreeting(name) {
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