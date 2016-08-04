<#include "header.ftl"/>

<body id="quotes" class="container-fluid">
    <h1>Journey Policy Administration</h1>
    <#include "nav.ftl"/>
    <script src="/bootstrap-table/bootstrap-table.js"></script>
    <link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
    <script src="/bootstrap-table/extensions/tableExport.js"></script>
    <script src="/bootstrap-table/bootstrap-table-export.js"></script>
    <div id="page-quotes" class="tab-pane" role="tabpanel">
        <div class="col-md-12">
            <div class="panel panel-default open">
                <div class="panel-heading">
                    <h1 class="panel-title">Quotes</h1>
                    <div id="panel-toolbar-placeholder"></div>
                </div>
                <div class="panel-body">
                    <div class="panel-filter" id="quotes-filter">
                        <form class="form-inline">
                            <table class="table">
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <div>
                                                <label for="filter-quote-number">Quote Number</label>
                                            </div>
                                            <div>
                                                <input type="text" class="form-control" id="filter-quote-number">
                                            </div>
                                        </div>
                                    </td>
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
                                                <label for="filter-date">Date</label>
                                            </div>
                                            <div>
                                                <input type="date" class="form-control" id="filter-date">
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
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <div>
                                                <label for="filter-type">Type</label>
                                            </div>
                                            <div>
                                                <select class="form-control" id="filter-type">
                                                    <option>---all---</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <div>
                                                <label for="filter-sales-channel">Sales Channel</label>
                                            </div>
                                            <div>
                                                <select class="form-control" id="filter-sales-channel">
                                                    <option>---all---</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <div>
                                                <label for="filter-broker">Broker</label>
                                            </div>
                                            <div>
                                                <select class="form-control" id="filter-broker">
                                                    <option>---all---</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <div>
                                                <label for="filter-source-type">Source Type</label>
                                            </div>
                                            <div>
                                                <select class="form-control" id="filter-source-type">
                                                    <option>---all---</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="panel-buttons">
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
                    <table id="quote-table" class="table-striped"></table>
                </div>
            </div>
        </div>
    </div>
</body>
<script>
$('#quote-table').bootstrapTable({
    url: '/api/quotes',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'quotes'
    },
    dataField:'quotes',
    columns: [{
        field: 'quote_id',
        title: 'QUOTE NO',
        sortable: true
    }, {
        field: 'driver.name',
        title: 'CUSTOMER'
    }, {
        field: 'vehicle',
        title: 'VEHICLE'
    }, {
        field: 'inception_unix_secs',
        title: 'Date'
    }, {
        field: 'status',
        title: 'Status'
    }, {
        field: 'broker',
        title: 'Broker'
    }],
    onClickRow: function(row, element, field) {
        window.location.href = 'quote-detail/' + row.quote_id;
    }
});
// Position between .fixed-table-toolbar and btn-group should be adjusted
$('#page-quotes .fixed-table-toolbar .btn-group:first').append('<button onclick="FILTER.panelVisibleToggle(\'quotes-filter\')" type="button" class="btn btn-default"><i class="glyphicon glyphicon-filter"></i></button>')
$('#page-quotes .fixed-table-toolbar .btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default"><a href="#"><i class="glyphicon glyphicon-plus"></i></a></button>')
$('#page-quotes #panel-toolbar-placeholder').after($('#page-quotes .fixed-table-toolbar'))

$('#page-quotes .fixed-table-toolbar').css({
    height: 40,
    marginTop: -15,
    marginBotton: -15
})
</script>

</html>
