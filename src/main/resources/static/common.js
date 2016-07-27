$(function() {
    $("nav div ul li").each(function(){
        if(typeof($(this).attr("id")) != "undefined" && $(this).attr("id").includes($('body').attr("id")))
            $(this).addClass("active");
    })
});