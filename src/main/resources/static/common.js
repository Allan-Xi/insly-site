$(function() {
    $("nav div ul li").each(function(){
        if(typeof($(this).attr("id")) != "undefined" && $(this).attr("id").includes($('body').attr("id")))
            $(this).addClass("active");
    })
});

FILTER={};

FILTER.panelVisibleToggle=function (panelID){
    $('#'+panelID).slideToggle();
};

FILTER.extendedFiltersToggle = function(parentID){
    var parent = document.getElementById(parentID);
//	if(parent.length>1){
//		alert('more than one parent');
//		return;
//	}
    var label = $(parent.getElementsByTagName('a')[0]);
    if(label.text()=="show all"){
        label.text('hide')
    } else{
        label.text('show all')
    }
    var children = parent.getElementsByClassName('extended-filter');
    $(children).toggle();

}

ROUTE={};

ROUTE.redirect