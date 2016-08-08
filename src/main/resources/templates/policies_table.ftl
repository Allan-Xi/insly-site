<script src="/bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
<script src="/bootstrap-table/extensions/tableExport.js"></script>
<script src="/bootstrap-table/bootstrap-table-export.js"></script>
<div id="page-policies" class="tab-pane" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Policies</h1>
                <div id="panel-toolbar-placeholder"></div>
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
                                            <input type="text" class="form-control" id="filter-policy-number">
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
                                            <select id="filter-policy-type" class="form-control">
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
    dataField: 'policies',
    columns: [{
        field: 'policy_id',
        title: 'POLICY',
        sortable: true
    }, {
        field: 'insured.name',
        title: 'INSURED'
    }, {
        field: 'inception_unix_secs',
        title: 'INCEPTION DATE'
    }, {
        field: 'expiry_unix_secs',
        title: 'EXPIRY DATE'
    }, {
        field: 'customer_full_name',
        title: 'CUSTOMER'
    }],
    onClickRow: function(row, element, field) {
        window.location.href = 'policy-detail/' + row.policy_id;
    }
});

// Position between .fixed-table-toolbar and btn-group should be adjusted
$('#page-policies .btn-group:first').append('<button onclick="FILTER.panelVisibleToggle(\'policy-filter\')" type="button" class="btn btn-default"><i class="glyphicon glyphicon-filter"></i></button>')
$('#page-policies .btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default"><a href="/policies/addquick"><i class="glyphicon glyphicon-plus"></i></a></button>')
$('#page-policies #panel-toolbar-placeholder').after($('#page-policies .fixed-table-toolbar'));

$('#page-policies .fixed-table-toolbar').css({
    height: 60,
    marginTop: -15,
    marginBottom: -15
})

</script>
