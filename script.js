document.getElementById('start').addEventListener('click', calculate)

let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

function calculate () {
  firstNum = document.getElementById('first-number').value
  secondNum = document.getElementById('second-number').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)
 
  for (counter = 0; counter < firstNum; counter++)
  {
    answer = answer + secondNum
  }
  document.getElementById('answer').innerHTML = (answer)
}