<script src="/bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
<script src="/bootstrap-table/extensions/tableExport.js"></script>
<script src="/bootstrap-table/bootstrap-table-export.js"></script>
<div id="page-customers" class="container-fluid">
    <div class="panel panel-default open">
        <div class="panel-heading">
            <h1 class="panel-title">Customers</h1>
            <div id="panel-toolbar-placeholder"></div>
        </div>
        <div class="panel-body">
            <div id="customer-filter" class="panel-filter">
                <form class="form-inline">
                    <table class="table">
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-name">NAME:</label>
                                    </div>
                                    <input type="text" class="form-control" id="filter-name">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-contact-person">CONTACT PERSON:</label>
                                    </div>
                                    <input type="text" class="form-control" id="filter-contact-person">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-fulltext-search">FULLTEXT SEARCH:</label>
                                    </div>
                                    <input type="text" class="form-control" id="filter-fulltext-search">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="extended-filter">
                                <div class="form-group">
                                    <div>
                                        <label for="filter-sales-channel">SALES CHANNEL:</label>
                                    </div>
                                    <select class="form-control" id="filter-sales-channel">
                                        <option>---all---</option>
                                        <option>Agent sales</option>
                                        <option>Campaign at Forbes magazine</option>
                                        <option>Facebook campaign</option>
                                        <option>Online sales through website</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                        	<td colspan="3">
                        	<a class="pull-right" href="javascript:FILTER.extendedFiltersToggle('customer-filter')">show all</a>
                        	</td>
                        </tr>
                        <tr>
                            <td class="panel-button" colspan="3">
                                <div class="group pull-right">
                                <button type="submit" class="btn btn-primary">Apply filters</button>
                                <button type="reset" class="btn btn-warning">Clear filters</button>
                                </div>
                            </td>
                        </tr>
                        <tr></tr>
                    </table>
                </form>
            </div>
            <table id="customer-table" class="table-striped"></table>
        </div>
    </div>
</div>
<script>
$('#customer-table').bootstrapTable({
    url: '/api/users',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'customers'
    },
    dataField:'users',
    columns: [{
    	field: 'user_id',
    	visible: false
    },
    {
        field: 'name',
        title: 'NAME',
        sortable: true
    }, {
        field: 'birthdate',
        title: 'BIRTH DATE'
    }, {
        field: 'email',
        title: 'E-MAIL ADDRESS'
    }, {
        field: 'phone',
        title: 'PHONE'
    } ],
    onClickRow: function(row, element, field){
            window.location.href = 'customer-detail/' + row.user_id;
        }
});
	// Position between .fixed-table-toolbar and btn-group should be adjusted
    $('.btn-group:first').append('<button onclick="FILTER.panelVisibleToggle(\'customer-filter\')" type="button" class="btn btn-default"><i class="glyphicon glyphicon-filter"></i></button>')
    $('.btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default" onclick="location=\'/customer/addquick\'"><i class="glyphicon glyphicon-plus"></i></button>')
    $('#panel-toolbar-placeholder').after($('.fixed-table-toolbar'))
    $('.fixed-table-toolbar').css({
        height: 60,
		marginTop:-15,
		marginBottom:-15
    })
</script>
