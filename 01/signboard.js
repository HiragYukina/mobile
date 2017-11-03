var container,
  displayPanel,
  controlPanel,
  textBox;
//window.onload = applnit;
window.addEventListener("DOMContentLoaded", applnit);

function applnit() {

  container = document.getElementById("container");
  displayPanel = document.getElementById("displayPanel");
  controlPanel = document.getElementById("controlPanel");
  textBox = document.getElementById("textBox");

  var applyButton = document.getElementById("applyButton");
  var clearButton = document.getElementById("clearButton");
  var account = document.getElementById("account");
  var pass = document.getElementById("login");

  applyButton.addEventListener("click", applyButtonClick, false);
  clearButton.addEventListener("click", clearText, false);
  account.addEventListener("click", login, false);

  window.onresize = setPosition;
  container.onclick = switchPanel;
  //キャンセル
  controlPanel.onclick = function(event) {
    event.cancelBubble = true;
  };
  account.onclick = function(event) {
    event.cancelBubble = true;
  }

  loadText();
}

function login() {
  var result = prompt("学籍番号", "",);
  if (result == "") {
    result = "ゲスト"
  }
  account.innerHTML = "ようこそ" + result + "さん";
}
function applyButtonClick(event) {
  var text = textBox.value;
  setText(text);
  saveText(text);
}

function clearText() {
  displayPanel.textContent = "";
  textBox.value = "";
}
function setPosition() {
  var bodyHeight = document.body.clienHeight;
  var divHeight = displayPanel.clienHeight;
  displayPanel.style.top = (bodyHeight - divHeight) / 2 + "px";
}

function switchPanel(event) {
  if (controlPanel.style.visibility == "hidden") {
    controlPanel.style.visibility = "visible";
  } else {
    controlPanel.style.visibility = "hidden";
  }
}

function saveText(text) {
  var storage = localStorage;
  if (typeof storage == "undefined") {
    return;
  }
  storage.setItem("text", text);
}

function setText(text) {
  displayPanel.textContent = text;
  if (text.length < 6) {
    displayPanel.style.fontSize = "72px";
  } else if (text.length < 11) {
    displayPanel.style.fontSize = "48px";
  } else {
    displayPanel.style.fontSize = "36px";
  }
  setPosition();
  switchPanel();
}
function loadText() {
  var storage = localStorage;
  if (typeof storage == "undefined") {
    return;
  }
  var text = storage.getItem("text");
  if (text) {
    setText(text);
  }
}
