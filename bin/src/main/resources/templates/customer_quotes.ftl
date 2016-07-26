<script src="../bootstrap-table/bootstrap-table.js"></script>
<link rel="../stylesheet" href="bootstrap-table/bootstrap-table.css">
<script src="../bootstrap-table/extensions/tableExport.js"></script>
<script src="../bootstrap-table/bootstrap-table-export.js"></script>
<div class="tab-pane fade" id="page-quotes" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span onclick="FILTER.panelVisibleToggle('customer-quotes-filter')">show filter</span></li>
                    <li><span>add</span></li>
                </ul>
                <h1 class="panel-title">Quotes</h1>
            </div>
            <div class="panel-body">
                <div class="panel-filter" id="customer-quotes-filter">
                    <table class="table table-condensed">
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-quote-number">QUOTE NUMBER</label>
                                    </div>
                                    <div>
                                        <input type="text" id="quote-number" class="filter-form-control">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="filter-object">OBJECT</label>
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
                <table id="quote-table"></table>
            </div>
        </div>
    </div>
</div>
<script>


$('#quote-table').bootstrapTable({
    url: '/api/customer/{number}/quotes',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'claims'
    },
    columns: [{
        field: 'quote_no',
        title: 'QUOTE NO',
        sortable: true
    }, {
        field: 'object',
        title: 'OBJECT'
    }, {
        field: 'date',
        title: 'DATE'
    }, {
        field: 'statue',
        title: 'STATUS'
    }, {
        field: 'broker',
        title: 'BROKER'
    }]
});
</script>
