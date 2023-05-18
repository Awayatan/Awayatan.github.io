
var elements = document.getElementsByClassName("main-content");

for (var i = 0; i < elements.length; i++) {
        var text = elements[i].innerText;
        var author = text.split("：")[0];

        if (author === "暗記") {
                elements[i].style.backgroundColor = "#d7de5411";
                elements[i].style.backgroundImage = "linear-gradient(135deg, #d7de541c, rgb(0, 0, 0))";
                elements[i].style.boxShadow ="inset 30px 0px 30px -30px #d7de54, inset 30px 0px 30px -30px #f3838b";
                elements[i].style.borderLeft = "3.5px solid #d7de54";
        } else if (author === "質問") {
                elements[i].style.backgroundColor = "#55555533";
                elements[i].style.backgroundImage = "linear-gradient(135deg, #5555551c, rgb(0, 0, 0))";
                elements[i].style.boxShadow ="inset 30px 0px 30px -30px #7d8b8d, inset 30px 0px 30px -30px #555555";
                elements[i].style.borderLeft = "3.5px solid #9a9a9a";
        } else if (author === "補足") {
                elements[i].style.backgroundColor = "#363756";
                elements[i].style.backgroundImage = "linear-gradient(135deg, #3637561c, rgb(0, 0, 0))";
                elements[i].style.boxShadow ="inset 30px 0px 30px -30px #7d8b8d, inset 30px 0px 30px -30px #8687a6";
                elements[i].style.borderLeft = "3.5px solid #9697f6";
        }else if (author === "注釈") {
                elements[i].style.backgroundColor = "#3d1d0d";
                elements[i].style.backgroundImage = "linear-gradient(135deg, #ad5d4d1c, rgb(0, 0, 0))";
                elements[i].style.boxShadow ="inset 30px 0px 30px -30px #ad5d4d, inset 30px 0px 30px -30px #ad5d4d";
                elements[i].style.borderLeft = "3.5px solid #ad5d4d";
        }else{
        }
}

for (var i = 0; i < elements.length; i++) {
        var editText = elements[i].innerHTML;
        var atIndex = editText.indexOf("：");
        if (atIndex !== -1) {
                var newText = '　' + editText.substring(atIndex + 1).trim();
                elements[i].innerHTML = newText;
        }
}
