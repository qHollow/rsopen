const numbers = document.querySelectorAll("#data-number");
const operation = document.querySelectorAll("#data-operation");
const equals = document.querySelector("#data-equals");
const del = document.querySelector("#data-delete");
const clear = document.querySelector("#data-all-clear");
const current = document.querySelector("#data-current-operand");
const previous = document.querySelector("#data-previous-operand");

let currentOperation = 0;
let readyReset = false;

// Добавляем события нажатия цифр
for(let i = 0; i < numbers.length; i++){
  let num = numbers[i];
  num.addEventListener("click", function(x){
    if(num.innerHTML === '.' && current.innerHTML.includes(".")){
      return;
    }
    if(readyReset){
      current.innerHTML = '';
      readyReset = false;
    }
    current.innerHTML += num.innerHTML;
  });
}
//Добавляем события нажатия операций
for(let i = 0; i < operation.length; i++){
  let num = operation[i];
  num.addEventListener("click", function(){
    if(!currentOperation){
      previous.innerHTML = current.innerHTML + num.innerHTML;
      current.innerHTML = "";
      currentOperation = num.innerHTML;
    }
  });
}

clear.addEventListener("click", function (){
  current.innerHTML = "";
  previous.innerHTML = "";
  currentOperation = "";
});

del.addEventListener("click", function () {
  current.innerHTML = current.innerHTML.slice(0, -1);
});

equals.addEventListener("click", function () {
  let answ = "";
  if(previous.innerHTML !== "" && current.innerHTML !== ""){
    switch(currentOperation){
      case '+':
        answ = +previous.innerHTML.slice(0, -1) + +current.innerHTML;
        console.log(answ);
        break;
      case '-':
        answ = +previous.innerHTML.slice(0, -1) - +current.innerHTML;
        console.log(answ);
        break;
      case '*':
        answ = +previous.innerHTML.slice(0, -1) * +current.innerHTML;
        console.log(answ);
        break;
      case '÷':
        answ = +previous.innerHTML.slice(0, -1) / +current.innerHTML;
        console.log(answ);
        break;
      default: return;
    }
    readyReset = true;
    previous.innerHTML = "";
    current.innerHTML = answ;//.toFixed(2);
    currentOperation = "";
  }
});


console.log("Только базовая функциональность.");
console.log("Связь: tg: @road2grave");
