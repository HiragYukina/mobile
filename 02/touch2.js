window.addEventListener("touchstart", onTouch);
function onTouch() {
  var content = $("#content")
  var result =  $("#result")

  content.bind("touchstart",function () {
    result.text("タップしました")
  })
  content.bind("touchend",function () {
    result.text("指を離しました")
  })
  content.bind("touchmove",function () {
    result.text("指を動かしています")
  })
  content.bind("touchcancel",function () {
    result.text("エラー")
  })
}
