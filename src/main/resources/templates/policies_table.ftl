<script src="bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="bootstrap-table/bootstrap-table.css">
<script src="bootstrap-table/extensions/tableExport.js"></script>
<script src="bootstrap-table/bootstrap-table-export.js"></script>
<main id="page-customers" class="container-fluid">
    <div class="panel panel-default open">
        <div class="panel-heading">
            <ul class="panel-actions list-inline pull-right">
                <li><span id="show-filter-btn">showfilter</span></li>
            </ul>
            <h1 class="panel-title">Customers</h1>
        </div>
        <div class="panel-body">
            <div id="filter-container">
                <form class="form-inline">
                    <table class="table">
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="policy-number">Policy Number:</label>
                                    </div>
                                    <input type="text" class="form-control" id="policy number">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="customer">Customer:</label>
                                    </div>
                                    <input type="text" class="form-control" id="customer">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="object">Object:</label>
                                    </div>
                                    <input type="text" class="form-control" id="object">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="status">Status:</label>
                                    </div>
                                    <select class="form-control" id="status">
                                        <option>---all---</option>
                                        <option>valide</option>
                                        <option>invalid</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="start-date">Start Date:</label>
                                    </div>
                                    <input type="text" class="form-control" id="start-date">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="end-date">Start Date:</label>
                                    </div>
                                    <input type="text" class="form-control" id="end-date">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="insurer">Insurer:</label>
                                    </div>
                                    <select class="form-control" id="insurer">
                                        <option>---all---</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="product">Product:</label>
                                    </div>
                                    <select class="form-control" id="product">
                                        <option>---all---</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr colspan="4" class="panel-buttons pull-right">
                            <td>
                                <button type="submit" class="btn btn-default">Apply filters</button>
                                <button type="reset" class="btn btn-warning">Clear filters</button>
                            </td>
                        </tr>
                        <tr></tr>
                    </table>
                </form>
            </div>
            <table id="policy-table" class="table-striped"></table>
        </div>
    </div>
</main>
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
            field: 'policy\_number',
            title: 'POLICY',
            sortable: true,
        },{
            field: 'insurer',
            title: 'INSURER'
        },{
            field: 'inception\_date',
            title: 'INCEPTION DATE'
        },{
            field: 'expiry\_date',
            title: 'EXPIRY DATE'
        },{
            field: 'customer\_full\_name',
            title: 'CUSTOMER'
        }],
        onClickRow: function(row, element, field){
            window.location.href = 'policy-detail/' + row.policy_number;
        }
    });
    
    $('#show-filter-btn').click(function(){
        $('#filter-container').slideToggle();
    })
</script>