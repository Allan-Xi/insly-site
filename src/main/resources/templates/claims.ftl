<#include "header.ftl"/>
<body id="claims">
    <h1>Journey Policy Administration</h1>
    <#include "nav.ftl"/>
    <script src="/bootstrap-table/bootstrap-table.js"></script>
    <link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
    <script src="/bootstrap-table/extensions/tableExport.js"></script>
    <script src="/bootstrap-table/bootstrap-table-export.js"></script>
    <div id="page-claims" class="tab-pane" role="tabpanel">
        <div class="col-md-12">
            <div class="panel panel-default open">
                <div class="panel-heading">
                    <h1 class="panel-title">Claims</h1>
                    <div id="panel-toolbar-placeholder"></div>
                </div>
                <div class="panel-body">
                    <div class="panel-filter" id="claim-filter">
                        <form class="form-inline">
                            <table class="table">
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
                                                <label for="filter-insurer-id">Insurer Id</label>
                                            </div>
                                            <div>
                                                <input type="text" class="form-control" id="filter-insurer-id">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <div>
                                                <label for="filter-status">Status</label>
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
                                    <td>
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
                                    <td>
                                        <div class="form-group">
                                            <div>
                                                <label for="filter-customer">Customer</label>
                                            </div>
                                            <div>
                                                <input type="text" class="form-control" id="filter-customer">
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
                                                <label for="filter-object">Object</label>
                                            </div>
                                            <div>
                                                <input type="text" class="form-control" id="filter-object">
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
                                                <label for="filter-date-submitted">Date submitted to Broker</label>
                                            </div>
                                            <div>
                                                <input type="date" id="filter-date-submitted" class="form-control">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <div>
                                                <label for="filter-claim-handler">Claim Handler</label>
                                            </div>
                                            <div>
                                                <select class="form-control" id="filter-claim-handler">
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
                    <table id="claim-table" class="table-striped"></table>
                </div>
            </div>
        </div>
    </div>
</body>
<script>
$('#claim-table').bootstrapTable({
    url: '/api/claims',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'policies'
    },
    dataField:'claims',
    columns: [{
        field: 'claim_id',
        title: 'CLAIM ID',
        sortable: true
    }, {
        field: 'policy.policy_number',
        title: 'POLICY'
    }, {
        field: 'status',
        title: 'STATUS'
    }, {
        field: 'driver.name',
        title: 'CLAIMANT'
    }, {
        field: 'vehicle',
        title: 'VEHICLE'
    }, {
        field: 'claim_handler',
        title: 'CLAIM HANDLER'
    }, {
        field: 'loss_date',
        title: 'LOSS DATE'
    }],
    onClickRow: function(row, element, field) {
        window.location.href = 'claim-detail/' + row.claim_id;
    }
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
<script>
$('#page-overview td').attr('width', '50%');
</script>

</html>
