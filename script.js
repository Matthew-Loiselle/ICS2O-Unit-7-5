document.getElementById('start').addEventListener('click', calculate)

let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

function calculate() {
  firstNum = document.getElementById('firstnumber').value
  secondNum = document.getElementById('secondnumber').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)

  if (firstNum >= 0) {
    for (counter = 0; counter < firstNum; counter++) {
      answer = answer + secondNum
    }
    document.getElementById('answer').innerHTML = (answer)
  } else {
    for (counter = 0; counter > firstNum; counter--) {
      answer = answer - secondNum
    }
    document.getElementById('answer').innerHTML = (answer)
  }
  answer = 0
}
