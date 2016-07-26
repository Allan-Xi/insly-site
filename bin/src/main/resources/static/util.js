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