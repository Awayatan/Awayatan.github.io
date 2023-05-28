var img = document.getElementById("img");

img.addEventListener("click", function() {
    var self = this;
    self.style.opacity = "0";
    setTimeout(function() {
        self.style.visibility = "collapse";
    }, 1500);
});