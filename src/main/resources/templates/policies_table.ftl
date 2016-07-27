<script src="../bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="../bootstrap-table/bootstrap-table.css">
<script src="../bootstrap-table/extensions/tableExport.js"></script>
<script src="../bootstrap-table/bootstrap-table-export.js"></script>
<div id="page-policies" class="tab-pane" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span onclick="FILTER.panelVisibleToggle('policy-filter')">showfilter</span></li>
                </ul>
                <h1 class="panel-title">Policies</h1>
            </div>
            <div class="panel-body">
                <div class="panel-filter" id="policy-filter">
                    <form class="form-inline">
                        <table class="table">
                            <tr>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-policy-number">Policy Number:</label>
                                        </div>
                                        <div>
                                            <input type="text" class="form-control" id="filter-policy number">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-object">Object:</label>
                                        </div>
                                        <div>
                                            <input type="text" class="form-control" id="filter-object">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-status">Status:</label>
                                        </div>
                                        <div>
                                            <select class="form-control" id="filter-status">
                                                <option>---all---</option>
                                                <option>valide</option>
                                                <option>invalid</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-start-date">Start Date:</label>
                                        </div>
                                        <div>
                                            <input type="date" class="form-control" id="filter-start-date">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-end-date">End Date:</label>
                                        </div>
                                        <div>
                                            <input type="date" class="form-control" id="filter-end-date">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-issue-date">Issue Date:</label>
                                        </div>
                                        <div>
                                            <input type="date" class="form-control" id="filter-issue-date">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-insurer">Insurer:</label>
                                        </div>
                                        <div>
                                            <select class="form-control" id="filter-insurer">
                                                <option>---all---</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-product">Product:</label>
                                        </div>
                                        <div>
                                            <select class="form-control" id="filter-product">
                                                <option>---all---</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <div>
                                            <label for="filter-policy-type">POLICY TYPE</label>
                                        </div>
                                        <div>
                                            <select id="policy-type" class="form-control" id="filter-policy-type">
                                                <option>---all---</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" class="panel-buttons">
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
                <table id="policy-table" class="table-striped"></table>
            </div>
        </div>
    </div>
</div>
<script>
$('#policy-table').bootstrapTable({
    url: '/api/policies',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'policies'
    },
    columns: [{
        field: 'policy_number',
        title: 'POLICY',
        sortable: true,
    }, {
        field: 'insurer',
        title: 'INSURER'
    }, {
        field: 'inception_date',
        title: 'INCEPTION DATE'
    }, {
        field: 'expiry_date',
        title: 'EXPIRY DATE'
    }, {
        field: 'customer_full_name',
        title: 'CUSTOMER'
    }],
    onClickRow: function(row, element, field) {
        window.location.href = 'policy-detail/' + row.policy_number;
    }
});

</script>
