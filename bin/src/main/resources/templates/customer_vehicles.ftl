<script src="../bootstrap-table/bootstrap-table.js"></script>
<link rel="../stylesheet" href="bootstrap-table/bootstrap-table.css">
<script src="../bootstrap-table/extensions/tableExport.js"></script>
<script src="../bootstrap-table/bootstrap-table-export.js"></script>
<div class="tab-pane fade" id="page-vehicles" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span onclick="FILTER.panelVisibleToggle('customer-vehicle-filter')">show filter</span></li>
                    <li><span>add</span></li>
                </ul>
                <h1 class="panel-title">Vehicles</h1>
            </div>
            <div class="panel-body">
                <div class="panel-filter" id="customer-vehicle-filter">
                    <table class="table table-condensed">
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-vehicle-type">TYPE</label>
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
                                        <label for="filter-vehicle">vehicle</label>
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
    url: '/api/customer/{number}/vehicles',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'claims'
    },
    columns: [{
        field: 'vehicle',
        title: 'VEHICLE',
        sortable: true
    }, {
        field: 'type',
        title: 'TYPE'
    }, {
        field: 'status',
        title: 'STATUS'
    }]
});
</script>
