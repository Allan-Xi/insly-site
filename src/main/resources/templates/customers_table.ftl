<script src="bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="bootstrap-table/bootstrap-table.css">
<script src="bootstrap-table/extensions/tableExport.js"></script>
<script src="bootstrap-table/bootstrap-table-export.js"></script>
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
                                        <label for="filter-name">Name:</label>
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
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-customer-type">CUSTOMER TYPE:</label>
                                    </div>
                                    <select class="form-control" id="filter-customer-type">
                                        <option>---all---</option>
                                        <option>company</option>
                                        <option>individual</option>
                                    </select>
                                </div>
                            </td>
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
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-account-manager">ACCOUNT MANAGER:</label>
                                    </div>
                                    <select class="form-control" id="filter-account-manager">
                                        <option>---all---</option>
                                        <option>Bette Nicka</option>
                                        <option>Cammy Albares</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                        	<td colspan="4">
                        	<a class="pull-right" href="javascript:FILTER.extendedFiltersToggle('customer-filter')">show all</a>
                        	</td>
                        </tr>
                        <tr>
                            <td class="panel-button" colspan="4">
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
    columns: [{
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
    }, ],
    onClickRow: function(row, element, field){
            window.location.href = 'customer-detail/' + row.name;
        }
});
	// Position between .fixed-table-toolbar and btn-group should be adjusted
    $('.btn-group:first').append('<button onclick="FILTER.panelVisibleToggle(\'customer-filter\')" type="button" class="btn btn-default"><i class="glyphicon glyphicon-filter"></i></button>')
    $('.btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default"><a href="/customers/quickAddCustomer"><i class="glyphicon glyphicon-plus"></i></a></button>')
    $('#panel-toolbar-placeholder').after($('.fixed-table-toolbar'))
    $("#btn-filter").click(function () {
        $("#customer-table-filter").slideToggle("fast");
    });
    $('.fixed-table-toolbar').css({
        height: 40,
		marginTop:-15,
		marginBotton:-15
    })
</script>
