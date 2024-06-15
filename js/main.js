'use strict'

function onBallClick(maxDiameter, ballClass) {

  var elBall = document.querySelector('.' + ballClass)
  var currMeasure = elBall.offsetWidth // using vanilla js to get current width
  var randomInt = getRandomInt(20, 61)

  var newMeasure = currMeasure + randomInt

  if (newMeasure > maxDiameter) newMeasure = 100

  elBall.style.backgroundColor = getRandomColor()
  
  elBall.style.width = newMeasure + 'px'
  elBall.style.height = newMeasure + 'px'
  
  elBall.innerText = newMeasure
}
