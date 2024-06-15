'use strict'

function onBallClick() {

  var elBall1 = document.querySelector('.ball')
  var currMeasure = elBall1.offsetWidth // using vanilla js to get current width
  var randomInt = getRandomInt(20, 61)

  var newMeasure = currMeasure + randomInt

  if (newMeasure > 400) newMeasure = 100

  elBall1.style.backgroundColor = getRandomColor()
  
  elBall1.style.width = newMeasure + 'px'
  elBall1.style.height = newMeasure + 'px'
  
  elBall1.innerText = newMeasure
}
