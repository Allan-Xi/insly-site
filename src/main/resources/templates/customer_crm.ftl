<script src="/bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
<script src="/bootstrap-table/extensions/tableExport.js"></script>
<script src="/bootstrap-table/bootstrap-table-export.js"></script>
<div class="tab-pane fade" id="page-crm" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">CRM</h1>
                <div id="panel-toolbar-placeholder"></div>
            </div>
            <div class="panel-body">
                <div class="panel-filter" id="customer-crm-filter">
                    <table class="table table-condensed">
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-status">STATUS</label>
                                    </div>
                                    <div>
                                        <select class="form-control" id="filter-status">
                                            <option>---all---</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-type">TYPE</label>
                                    </div>
                                    <div>
                                        <select class="form-control" id="filter-type">
                                            <option>---all---</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="panel-button" colspan="4">
                                <div class="group pull-right">
                                    <button class="btn btn-primary">Apply</button>
                                    <button class="btn btn-warning">Clear</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <table id="crm-table"></table>
            </div>
        </div>
    </div>
</div>
<script>
// show filter animation

$('#crm-table').bootstrapTable({
    url: '/api/customers/{number}/crm',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'claims'
    },
    columns: [{
        field: 'date',
        title: 'DATE',
        sortable: true
    }, {
        field: 'task',
        title: 'TASK'
    }, {
        field: 'description',
        title: 'DESCRIPTION'
    }, {
        field: 'responsible',
        title: 'RESPONSIBLE'
    }, {
        field: 'type',
        title: 'TYPE'
    }, {
    	field: 'status',
    	title: 'STATUS'
    }]
});
// Position between .fixed-table-toolbar and btn-group should be adjusted
$('#page-crm .fixed-table-toolbar .btn-group:first').append('<button onclick="FILTER.panelVisibleToggle(\'customer-crm-filter\')" type="button" class="btn btn-default"><i class="glyphicon glyphicon-filter"></i></button>')
$('#page-crm .fixed-table-toolbar .btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default"><a href="#"><i class="glyphicon glyphicon-plus"></i></a></button>')
$('#page-crm #panel-toolbar-placeholder').after($('#page-crm .fixed-table-toolbar'))

$('#page-crm .fixed-table-toolbar').css({
    height: 40,
    marginTop: -15,
    marginBotton: -15
})
</script>
