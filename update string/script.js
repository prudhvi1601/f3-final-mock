let currentString = '';

function updateString() {
  currentString = document.getElementById('input').value;
  document.getElementById('string').innerHTML = currentString;
}

function findAndReplace() {
  const find = document.getElementById('find').value;
  const replace = document.getElementById('replace').value;
  currentString = currentString.replace(find, replace);
  document.getElementById('string').innerHTML = currentString;
}

function toUpperCase() {
  currentString = currentString.toUpperCase();
  document.getElementById('string').innerHTML = currentString;
}

function toLowerCase() {
  currentString = currentString.toLowerCase();
  document.getElementById('string').innerHTML = currentString;
}

function concatenate() {
  const concat = document.getElementById('concat').value;
  currentString += concat;
  document.getElementById('string').innerHTML = currentString;
}
