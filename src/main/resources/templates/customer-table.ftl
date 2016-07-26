<script src="bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="bootstrap-table/bootstrap-table.css">
<script src="bootstrap-table/extensions/tableExport.js"></script>
<script src="bootstrap-table/bootstrap-table-export.js"></script>

<div class="container">
    <form id="customer-table-filter" class="form-inline">
        <div class="row">
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
                    <option data-hidden="true">---all---</option>
                    <option>company</option>
                    <option>individual</option>
                </select>
            </div>
        </div>
        <div id="slide-fields" class="row">
            <div class="form-group">
                <label for="sales-channel">SALES CHANNEL:</label>
                <select class="form-control" id="sales-channel">
                    <option data-hidden="true">---all---</option>
                    <option>Agent sales</option>
                    <option>Campaign at Forbes magazine</option>
                    <option>Facebook campaign</option>
                    <option>Online sales through website</option>
                </select>
            </div>
            <div class="form-group">
                <label for="account-manager">ACCOUNT MANAGER:</label>
                <select class="form-control" id="account-manager">
                    <option data-hidden="true">---all---</option>
                    <option>Bette Nicka</option>
                    <option>Cammy Albares</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div id="show-filter" class="btn pull-right">Hide extended filters</div>
        </div>

        <div class="row">
            <button type="reset" class="btn btn-warning pull-right">Clear filters</button>
            <button type="submit" class="btn btn-default pull-right">Apply filters</button>
        </div>
    </form>
    <table id="customer-table"></table>
</div>

<script>
    $("#show-filter").click(function () {
        $("#slide-fields").slideToggle("fast", function () {
            if ($(this).is(':hidden')) {
                $('#show-filter').text('Show All')
            } else {
                $('#show-filter').text('Hide extended filters')
            }
        });
    });

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

    // Position between .fixed-table-toolbar and btn-group should be adjusted
    $('.btn-group:first').append('<button id="btn-filter" type="button" class="btn btn-default"><i class="glyphicon glyphicon-filter"></i></button>')
    $('.btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default"><a href="/customers/quickAddCustomer"><i class="glyphicon glyphicon-plus"></i></a></button>')
    $('.fixed-table-toolbar').after($('#customer-table-filter'))
    $("#btn-filter").click(function () {
        $("#customer-table-filter").slideToggle("fast");
    });
    $('.fixed-table-toolbar').css({
        height: 60,
    })
</script>
