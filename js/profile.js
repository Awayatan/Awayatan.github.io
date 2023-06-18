var wrapper = document.getElementById("profile-wrapper");
var profileEN = document.getElementById("profileEN");
var profileJP = document.getElementById("profileJP");

wrapper.addEventListener("click", function() {
    if (profileEN.style.opacity === "0") {
      profileEN.style.opacity = "1";
      profileJP.style.opacity = "0";
    } else {
      profileEN.style.opacity = "0";
      profileJP.style.opacity = "1";
    }
  });