import content from './content-utils.js';

function getContent(blockName, param) {
  switch (blockName) {
    case 'greeting':
      return content.getGreeting(param);
    case 'time':
      return `it's ${content.getTime()}`;
    default:
      return ''
  }
}

function show(blockName, param) {
  const domElement = document.getElementById(blockName);
  domElement.innerHTML = getContent(blockName, param);
}

const name = prompt('your name:');
show('greeting', name);
show('time');
