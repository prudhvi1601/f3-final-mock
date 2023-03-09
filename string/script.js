let currentString = '';

const input = document.querySelector('#input');
const updatebtn = document.querySelector('#btn');
const h3 = document.querySelector('#str');
const btnfr = document.querySelector('#fr');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const concatIp = document.querySelector('#concat');
const btnconcat = document.querySelector('#concatination');

function updateStr() {
    currentString = input.value;
    h3.innerHTML = currentString;
}

function findAndReplace() {
    const find = document.querySelector('#find').value;
    const replace = document.querySelector('#replace').value;
    currentString = currentString.replace(find, replace);
    h3.innerHTML = currentString;
}

function toUpper() {
    currentString = currentString.toUpperCase();
    h3.innerHTML = currentString;
}

function toLower() {
    currentString = currentString.toLowerCase();
    h3.innerHTML = currentString;
}

function concaT() {
    currentString = currentString.concat();
    h3.innerHTML = currentString + concatIp.value;
}

updatebtn.addEventListener('click', updateStr);
btnfr.addEventListener('click', findAndReplace);
upper.addEventListener('click', toUpper);
lower.addEventListener('click', toLower);
btnconcat.addEventListener('click', concaT);