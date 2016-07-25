<script src="bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="bootstrap-table/bootstrap-table.css">
<script src="bootstrap-table/extensions/tableExport.js"></script>
<script src="bootstrap-table/bootstrap-table-export.js"></script>

<div class="container">
    <form class="form-inline">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="contact-person">CONTACT PERSON:</label>
            <input type="text" class="form-control" id="contact-person">
        </div>
        <div class="form-group">
            <label for="fulltext-search">FULLTEXT SEARCH:</label>
            <input type="text" class="form-control" id="fulltext-search">
        </div>
        <div class="form-group">
            <label for="customer-type">CUSTOMER TYPE:</label>
            <select class="form-control" id="customer-type">
                <option>---all---</option>
                <option>company</option>
                <option>individual</option>
            </select>
        </div>
        <div class="form-group">
            <label for="sales-channel">SALES CHANNEL:</label>
            <select class="form-control" id="sales-channel">
                <option>---all---</option>
                <option>Agent sales</option>
                <option>Campaign at Forbes magazine</option>
                <option>Facebook campaign</option>
                <option>Online sales through website</option>
            </select>
        </div>
        <div class="form-group">
            <label for="account-manager">ACCOUNT MANAGER:</label>
            <select class="form-control" id="account-manager">
                <option>---all---</option>
                <option>Bette Nicka</option>
                <option>Cammy Albares</option>
            </select>
        </div>
        <button type="submit" class="btn btn-default">Apply filters</button>
        <button type="reset" class="btn btn-warning">Clear filters</button>
    </form>
    <table id="customer-table"></table>
</div>

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
        },]
    });
</script>