'use strict';

const btn = document.getElementById('btn');
const range = document.getElementById('range');
const input = document.getElementById('text');
const btnInSquare = document.getElementById('e_btn');
const circle = document.querySelector('#circle');
const square = document.querySelector('#square');

// замена цвета квадрата
btn.addEventListener('click', function () {
  let textInput = input.value;
  console.log(textInput);

  square.style.backgroundColor = textInput;
});

// кнопка в кружке
btnInSquare.style.display = 'none';

// изменение размера кружка
range.addEventListener('input', function (event) {
  let inputRange = event.target.value;
  circle.style.width = `${inputRange}%`;
  circle.style.height = `${inputRange}%`;
});
