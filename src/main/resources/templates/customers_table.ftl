
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
                                        <label for="name">Name:</label>
                                    </div>
                                    <input type="text" class="form-control" id="name">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="contact-person">CONTACT PERSON:</label>
                                    </div>
                                    <input type="text" class="form-control" id="contact-person">
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="fulltext-search">FULLTEXT SEARCH:</label>
                                    </div>
                                    <input type="text" class="form-control" id="fulltext-search">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="customer-type">CUSTOMER TYPE:</label>
                                    </div>
                                    <select class="form-control" id="customer-type">
                                        <option>---all---</option>
                                        <option>company</option>
                                        <option>individual</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="sales-channel">SALES CHANNEL:</label>
                                    </div>
                                    <select class="form-control" id="sales-channel">
                                        <option>---all---</option>
                                        <option>Agent sales</option>
                                        <option>Campaign at Forbes magazine</option>
                                        <option>Facebook campaign</option>
                                        <option>Online sales through website</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <div>
                                        <label for="account-manager">ACCOUNT MANAGER:</label>
                                    </div>
                                    <select class="form-control" id="account-manager">
                                        <option>---all---</option>
                                        <option>Bette Nicka</option>
                                        <option>Cammy Albares</option>
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
            <table id="customer-table" class="table-striped"></table>
        </div>
    </div>
</main>
<script>
$('#customer-table').bootstrapTable({
    url: '/api/users',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'customers'
    },
    columns: [{
        field: 'name',
        title: 'NAME',
        sortable: true
    }, {
        field: 'birthdate',
        title: 'BIRTH DATE'
    }, {
        field: 'email',
        title: 'E-MAIL ADDRESS'
    }, {
        field: 'phone',
        title: 'PHONE'
    }, ]
});
</script>
<script>
$('#show-filter-btn').click(function() {
    $('#filter-container').slideToggle();
})
</script>
