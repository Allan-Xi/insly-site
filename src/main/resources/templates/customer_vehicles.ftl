<script src="/bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
<script src="/bootstrap-table/extensions/tableExport.js"></script>
<script src="/bootstrap-table/bootstrap-table-export.js"></script>
<div class="tab-pane fade" id="page-vehicles" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Vehicles</h1>
                <div id="panel-toolbar-placeholder"></div>
            </div>
            <div class="panel-body">
                <div class="panel-filter" id="customer-vehicles-filter">
                    <table class="table table-condensed">
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-vehicles\-type">TYPE</label>
                                    </div>
                                    <div>
                                        <select class="form-control" id="filter-vehicle-type">
                                            <option>---all---</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-vehicle">VEHICLE</label>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" id="filter-vehicle">
                                    </div>
                                </div>
                            </td>
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
                <table id="vehicle-table"></table>
            </div>
        </div>
    </div>
</div>
<script>
$('#vehicle-table').bootstrapTable({
    url: '/api/customers/${customer.user_id}/vehicles',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'claims'
    },
    dataField:  'vehicles',
    columns: [{
        field: 'make',
        title: 'VEHICLE',
        sortable: true
    }, {
        field: 'type',
        title: 'TYPE'
    }, {
        field: 'condition',
        title: 'CONDITION'
    }]
});

// Position between .fixed-table-toolbar and btn-group should be adjusted
$('#page-vehicles .fixed-table-toolbar .btn-group:first').append('<button onclick="FILTER.panelVisibleToggle(\'customer-vehicles-filter\')" type="button" class="btn btn-default"><i class="glyphicon glyphicon-filter"></i></button>')
$('#page-vehicles .fixed-table-toolbar .btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default"><a href="#"><i class="glyphicon glyphicon-plus"></i></a></button>')
$('#page-vehicles #panel-toolbar-placeholder').after($('#page-vehicles .fixed-table-toolbar'))

$('#page-vehicles .fixed-table-toolbar').css({
    height: 40,
    marginTop: -15,
    marginBotton: -15
})
</script>
