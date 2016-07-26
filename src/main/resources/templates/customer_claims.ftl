<script src="../bootstrap-table/bootstrap-table.js"></script>
<link rel="../stylesheet" href="bootstrap-table/bootstrap-table.css">
<script src="../bootstrap-table/extensions/tableExport.js"></script>
<script src="../bootstrap-table/bootstrap-table-export.js"></script>
<div class="tab-pane fade" id="page-claims" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>action1</span></li>
                    <li><span>action2</span></li>
                    <li><span onclick="FILTER.panelVisibleToggle('customer-claim-filter')">show filter</span></li>
                    <li><span>action4</span></li>
                </ul>
                <h1 class="panel-title">Claims</h1>
            </div>
            <div class="panel-body">
                <div class="panel-filter" id="customer-claim-filter">
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
    url: '/api/claims',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'claims'
    },
    columns: [{
        field: 'claim_id',
        title: 'CLIAM ID',
        sortable: true
    }, {
        field: 'customer',
        title: 'CUSTOMER'
    }, {
        field: 'insurer',
        title: 'INSURER'
    }, {
        field: 'status',
        title: 'STATUS'
    }, {
        field: 'claimant',
        title: 'CLAIMANT'
    }, {
        field: 'product',
        title: 'PRODUCT'
    }, {
        field: 'object',
        title: 'OBJECT'
    }, {
        field: 'broker',
        title: 'BROKER'
    }, {
        field: 'loss_data',
        title: 'LOSS DATE'
    }]
});
</script>