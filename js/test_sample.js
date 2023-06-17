function header(){
    $.ajax({
        url: "testheader.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
  }
