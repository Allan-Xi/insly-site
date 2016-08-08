<script src="/bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
<script src="/bootstrap-table/extensions/tableExport.js"></script>
<script src="/bootstrap-table/bootstrap-table-export.js"></script>
<div class="tab-pane fade" id="page-claims" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Claims</h1>
                <div id="panel-toolbar-placeholder"></div>
            </div>
            <div class="panel-body">
                <div class="panel-filter" id="customer-claims-filter">
                    <table class="table table-condensed">
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-claim-id">Claim Id</label>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" id="filter-claim-id">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-policy">Policy</label>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" id="filter-policy">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-insurer">Insurer</label>
                                    </div>
                                    <div>
                                        <select id="filter-insurer" class="form-control">
                                            <option value="0">---all---</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-status">Status</label>
                                    </div>
                                    <div>
                                        <select id="filter-status" class="form-control">
                                            <option value="0">---all---</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-claimant">Claimant</label>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" id="filter-claimant">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-product">Product</label>
                                    </div>
                                    <div>
                                        <select id="filter-product" class="form-control">
                                            <option value="0">---all---</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-broker">Borker</label>
                                    </div>
                                    <div>
                                        <select id="filter-broker" class="form-control">
                                            <option value="0">---all---</option>
                                        </select>
                                    </div>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td class="extended-filter">
                                <div class="form-group">
                                    <div>
                                        <label for="filter-incident-loss-date">Incident/Loss Date</label>
                                    </div>
                                    <div>
                                        <input type="date" class="form-control" id="filter-incident-loss-date">
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
                <table id="claims-table"></table>
            </div>
        </div>
    </div>
</div>
<script>

$('#page-claims #claims-table').bootstrapTable({
    url: '/api/customers/${customer.user_id!'none'}/claims',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'claims'
    },
    dataField: 'claims',
    columns: [{
        field: 'claim_id',
        title: 'CLIAM ID',
        sortable: true
    }, {
        field: 'driver',
        title: 'CUSTOMER'
    }, {
        field: 'insurer',
        title: 'INSURER'
    }, {
        field: 'status',
        title: 'STATUS'
    }, {
        field: 'product',
        title: 'PRODUCT'
    }, {
        field: 'vehicle',
        title: 'VEHICLE'
    }, {
        field: 'broker',
        title: 'BROKER'
    }, {
        field: 'loss_data',
        title: 'LOSS DATE'
    }]
});

// Position between .fixed-table-toolbar and btn-group should be adjusted
$('#page-claims .fixed-table-toolbar .btn-group:first').append('<button onclick="FILTER.panelVisibleToggle(\'customer-claims-filter\')" type="button" class="btn btn-default"><i class="glyphicon glyphicon-filter"></i></button>')
$('#page-claims .fixed-table-toolbar .btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default"><a href="#"><i class="glyphicon glyphicon-plus"></i></a></button>')
$('#page-claims #panel-toolbar-placeholder').after($('#page-claims .fixed-table-toolbar'))

$('#page-claims .fixed-table-toolbar').css({
    height: 40,
    marginTop: -15,
    marginBotton: -15
})
</script>
