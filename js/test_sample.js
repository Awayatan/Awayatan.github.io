    $.ajaxSetup({
        type: "POST",
        dataType: "html",
        timeout: 11000,
        cache: false
        }
    });

    $.ajax({
        url: "/testheader.html",
        success: function(data) {
            $("#header").html($(data));
        }
    });
