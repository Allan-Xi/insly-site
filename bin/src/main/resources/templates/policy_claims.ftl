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
                    <li><span onclick="FILTER.panelVisibleToggle('policy-claim-filter')">show filter</span></li>
                    <li><span>action4</span></li>
                </ul>
                <h1 class="panel-title">Claims</h1>
            </div>
            <div class="panel-body">
                <div class="panel-filter" id="policy-claim-filter">
                    <table class="table table-condensed">
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-claim-id">Claim Id</label>
                                    </div>
                                    <div>
                                        <input type="text" class="filter-form-control">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-customer">Customer</label>
                                    </div>
                                    <div>
                                        <input type="text" class="filter-form-control">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-object">Object</label>
                                    </div>
                                    <div>
                                        <input type="text" class="filter-form-control">
                                    </div>
                                </div>
                            </td>
                            <td class="extended-filter">
                                <div class="form-group">
                                    <div>
                                        <label for="filter-status">status</label>
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
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-start-date">Start Date</label>
                                    </div>
                                    <div>
                                        <input type="date" class="form-control" id="filter-start-date">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-end-date">End Date</label>
                                    </div>
                                    <div>
                                        <input type="date" class="form-control" id="filter-end-date">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-insurer">Insurer</label>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" id="filter-insurer">
                                    </div>
                                </div>
                            </td>
                            <td class="extended-filter">
                                <div class="form-group">
                                    <div>
                                        <label for="filter-product">Product</label>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" id="filter-product">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="extended-filter">
                                <div class="form-group">
                                    <div>
                                        <label for="filter-automatically-issued-policy">Automatically Issued Policy</label>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" id="filter-automatically-issued-policy">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <div class="pull-right"><a href="javascript:FILTER.extendedFiltersToggle('policy-claim-filter')" id="full-filter-toggle">hide all</a></div>
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

$('#claims-table').bootstrapTable({
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
