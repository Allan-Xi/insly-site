<#include "header.ftl"/>
<script src="common.js"></script>
<body id="quotes">
    <h1>Demo Broker</h1>
    <#include "nav.ftl"/>
    <script src="../bootstrap-table/bootstrap-table.js"></script>
    <link rel="stylesheet" href="../bootstrap-table/bootstrap-table.css">
    <script src="../bootstrap-table
/extensions/tableExport.js"></script>
    <script src="../bootstrap-table/bootstrap-table-export.js"></script>
    <div id="page-claims" class="tab-pane" role="tabpanel">
        <div class="col-md-12">
            <div class="panel panel-default open">
                <div class="panel-heading">
                    <ul class="panel-actions list-inline pull-right">
                        <li><span onclick="FILTER.panelVisibleToggle('claim-filter')">showfilter</span></li>
                    </ul>
                    <h1 class="panel-title">Quotes</h1>
                </div>
                <div class="panel-body">
                    <div class="panel-filter" id="claim-filter">
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
                                                <input type="text" class="form-control" id="filter-insurer-id">
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
                                                <input type="date" class="form-control" id="filter-insurer-id">
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
    <script>
    $('#quote-table').bootstrapTable({
        url: '/api/quotes',
        showColumns: true,
        showToggle: true,
        showExport: true,
        pagination: true,
        sidePagination: 'server',
        exportOptions: {
            fileName: 'policies'
        },
        columns: [{
            field: 'quote_no',
            title: 'QUOTE NO',
            sortable: true,
        }, {
            field: 'customer',
            title: 'CUSTOMER'
        }, {
            field: 'object',
            title: 'OBJECT'
        }, {
            field: 'date',
            title: 'Date'
        }, {
            field: 'status',
            title: 'Status'
        }, {
            field: 'broker',
            title: 'Broker'
        }],
        onClickRow: function(row, element, field) {
            window.location.href = 'quote-detail/' + row.quote_no;
        }
    });
    </script>
</body>

</html>
