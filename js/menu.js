// CSS取得
let menu = document.getElementById("menu");
let button = document.getElementById("button");
let container = document.getElementById("container");
let shadow = document.getElementById("container-shadow");
let onElement = document.getElementById("cookie-on");
let offElement = document.getElementById("cookie-off");
let savingAlert = document.getElementById("saving-alert");
let close = document.getElementById("close");
let root = document.documentElement;


// ボタンが押された場合
button.addEventListener("change", function() {
  if (button.checked) {
    menuOpen();
  } else {
    menuClose();
  }
});

// 本来のページ部分が押された場合
shadow.addEventListener("click", function() {
  if (button.checked) {
    menuClose();
  } else {
  }
});

// menu展開・収納関数
function menuOpen(){
  menu.style.opacity = "1";
  menu.style.right = "2vw";
  container.style.marginLeft = "-40vw";
  shadow.style.opacity = "0.7";
  shadow.style.visibility = "visible";
  shadow.style.right = "calc(33vw + 60px)";
}
function menuClose(){
  menu.style.opacity = "0";
  menu.style.right = "-43vw";
  container.style.marginLeft = "0";
  shadow.style.opacity = "0";
  shadow.style.right = "0";
  setTimeout(() => shadowVisibility(),1000);
}

// 遅延用の関数
function shadowVisibility(){
  shadow.style.visibility = "collapse";
}

// モード切り替え
let saving = document.getElementById("saving");
let spring = document.getElementById("spring");
let summer = document.getElementById("summer");
let autumn = document.getElementById("autumn");
let winter = document.getElementById("winter");
let disable = document.getElementById("disable");
let mode = autumn;

saving.addEventListener("click", function(){
  savingAlert.style.visibility = "visible";
  if(saving.checked === true){
  setCookie("saving", "saving", 7);
  onElement.style.visibility = "visible";
  offElement.style.visibility = "collapse";
  }else{
  setCookie("saving", "canvasRun", 7);
  onElement.style.visibility = "visible";
  offElement.style.visibility = "collapse";
  }
});

// キーボード操作用
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    savingAlert.style.visibility = "collapse";
  }else if(event.ctrlKey && event.key === "m"){
    menuOpen
  }
});

spring.addEventListener("click", function() {
  setCookie("mode", "spring", 7);
  onElement.style.visibility = "visible";
  offElement.style.visibility = "collapse";
  springColour();
});
summer.addEventListener("click", function() {
  setCookie("mode", "sumer", 7);
  onElement.style.visibility = "visible";
  offElement.style.visibility = "collapse";
  summerColour();
});
autumn.addEventListener("click", function() {
  setCookie("mode", "autumn", 7);
  onElement.style.visibility = "visible";
  offElement.style.visibility = "collapse";
  autumnColour();
});
winter.addEventListener("click", function() {
  setCookie("mode", "winter", 7);
  onElement.style.visibility = "visible";
  offElement.style.visibility = "collapse";
  winterColour();
});
disable.addEventListener("click", function(){
  let cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf("=");
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  onElement.style.visibility = "collapse";
  offElement.style.visibility = "visible";
  saving.checked = false;
});

// アラートを閉じる
close.addEventListener("click", function() {
  savingAlert.style.visibility = "collapse";
});


function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// cookieの取得
function getCookie(name) {
  var cookieArray = document.cookie.split("; ");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

let modeValue = getCookie("mode");
let savingValue = getCookie("saving");
window.addEventListener("load", function() {
  if (modeValue || savingValue) {
    onElement.style.visibility = "visible";
    offElement.style.visibility = "collapse";
      if(modeValue){
      switch (modeValue) {
        case "spring":
          spring.checked = true;
          springColour();
          break;
        case "summer":
          summer.checked = true;
          summerColour();
          break;
        case "autumn":
          autumn.checked = true;
          autumnColour();
          break;
        case "winter":
          winter.checked = true;
          winterColour();
          break;
      }
      }
      if(savingValue == "saving"){
        saving.checked = true;
      }
  }else{
    onElement.style.visibility = "collapse";
    offElement.style.visibility = "visible";
  }
});

function springColour(){
  root.style.setProperty('--bg-img', 'linear-gradient(to right, #df96d8, #c8c5ee)');
  root.style.setProperty('--menu-bg-colour', '#44c1469e');
  root.style.setProperty('--font-colour', '#1b1a1a');
  root.style.setProperty('--a-colour', '#26498b');
  root.style.setProperty('--a-bg-colour', '#bae7e2');
  root.style.setProperty('--a-visited-bg-colour', '#cda3b1');
  root.style.setProperty('--a-visited-colour', '#d4507a');
  root.style.setProperty('--select-colour', '#af8653');
  root.style.setProperty('--border-colour', '#74d67b');
  root.style.setProperty('--checked-colour', '#29a779');
}

function summerColour(){
  root.style.setProperty('--bg-img', 'linear-gradient(to right, #377174, #171258)');
  root.style.setProperty('--menu-bg-colour', '#5bacbd9e');
  root.style.setProperty('--font-colour', '#beb5b5');
  root.style.setProperty('--a-colour', '#66a9eb');
  root.style.setProperty('--a-bg-colour', '#bae7e2');
  root.style.setProperty('--a-visited-bg-colour', '#cda3b1');
  root.style.setProperty('--a-visited-colour', '#d4507a');
  root.style.setProperty('--select-colour', '#af8653');
  root.style.setProperty('--border-colour', '#168b1e');
  root.style.setProperty('--checked-colour', '#3a6555');
}

function autumnColour(){
root.style.setProperty('--bg-img', 'linear-gradient(to right, #a11616, #ff9544)');
root.style.setProperty('--menu-bg-colour', '#51236e9e');
root.style.setProperty('--font-colour', '#ffebeb');
root.style.setProperty('--a-colour', '#83ccd2');
root.style.setProperty('--a-bg-colour', '#102926');
root.style.setProperty('--a-visited-bg-colour', '#291018');
root.style.setProperty('--a-visited-colour', '#eebbcb');
root.style.setProperty('--select-colour', '#c8faee');
root.style.setProperty('--border-colour', '#eacccc');
root.style.setProperty('--checked-colour', '#676106');
}

function winterColour(){
  root.style.setProperty('--bg-img', 'linear-gradient(to right, #166ea1, #fffffe)');
  root.style.setProperty('--menu-bg-colour', '#97ce949e');
  root.style.setProperty('--font-colour', '#000000');
  root.style.setProperty('--a-colour', '#125257');
  root.style.setProperty('--a-bg-colour', '#5dc8bb');
  root.style.setProperty('--a-visited-bg-colour', '#93123b');
  root.style.setProperty('--a-visited-colour', '#ebcfd8');
  root.style.setProperty('--select-colour', '#3b7366');
  root.style.setProperty('--border-colour', '#cb7070');
  root.style.setProperty('--checked-colour', '#989452');
}