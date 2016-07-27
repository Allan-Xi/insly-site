$(function() {
    $("nav div ul li").each(function(){
        if($(this).attr("id").includes($('body').attr("id")))
            $(this).addClass("active");
    })
});