function header(){
    $.ajax({
        url: "https://www.awayatan.com/testheader.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
  }
