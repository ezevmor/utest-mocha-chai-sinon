function getGreeting(name) {
  if (!name || name.trim().length === 0) {
    name = 'anonymous';
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