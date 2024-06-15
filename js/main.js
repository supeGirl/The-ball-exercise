'use strict'

function onBallClick(){
  var elBall1 = document.querySelector('.ball')
  var currMeasure = elBall1.offsetWidth // using vanilla js to get current width
  var newMeasure = currMeasure + 50

  elBall1.style.width = newMeasure + 'px'
  elBall1.style.height = newMeasure + 'px'

  elBall1.innerText = newMeasure 
}