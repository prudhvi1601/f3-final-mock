// Write your code here
const num1 = document.querySelector('#number1');
const num2 = document.querySelector('#number2');
const addition = document.querySelector("#bat");
const result = document.querySelector('#result')

function sum(){
  result.value = Number(num1.value) + Number(num2.value);
}

addition.addEventListener('click',sum);