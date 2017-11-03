window.addEventListener("touchstart", onTouch,false)

function onTouch(evt) {
  //パレット
  var palette = ["hotpink","orangered","blue","red","purple","green","cyan","yellow"]
  var baseX = $("#canvas").position().left
  var baseY = $("#canvas").position().top
  var x = evt.touches[0].pageX
  var y = evt.touches[0].pageY

  //canvass
  var canvasObj = document.getElementById('canvas')
  var context = canvasObj.getContext("2d")
  var n = Math.floor(Math.random()*palette.length)
  context.fillStyle = palette[n] //ランダムな色
  context.beginPath()
  context.arc(x-baseX,y-baseY,30,0,2*Math.PI,true)
  context.fill()
}
function update() {
var canvasObj = document.getElementById('canvas')
var context = canvasObj.getContext("2d")
context.fillStyle ="rgba(255,255,255 ,0.1)"
context.fillRect(0,0,canvasObj.width,canvasObj.height)
requestAnimationFrame(update)
}
requestAnimationFrame(update)

/*setInterval(function () {
  var canvasObj = document.getElementById('canvas')
  var context = canvasObj.getContext("2d")
  context.fillStyle ="rgba(255,255,255 ,0.125)"
  context.fillRect(0,0,canvasObj.width,canvasObj.height)
},100)*/
