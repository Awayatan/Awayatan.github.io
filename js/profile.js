var wrapper = document.getElementById("message-wrapper");
var messageEN = document.getElementById("messageEN");
var messageJP = document.getElementById("messageJP");

wrapper.addEventListener("click", function() {
    if (messageEN.style.opacity === "0") {
      messageEN.style.opacity = "1";
      messageJP.style.opacity = "0";
    } else {
      messageEN.style.opacity = "0";
      messageJP.style.opacity = "1";
    }
  });