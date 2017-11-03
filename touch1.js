window.addEventListener("touchstart",function (evt) {
  var result =$("#result")
  var touchNumber = evt.touches.length

  result.html("<p>タッチされた数:"+touchNumber+"</p>")
  result.append("<hr><p>")

  for (var i = 0; i <touchNumber; i++) {
    for (var paramName in evt.touches[i]) {
    var value =evt.touches[i][paramName]
    result.append(paramName+":"+value+"<br>")
    }
    result.append("</p><hr>")
  }
},false)
