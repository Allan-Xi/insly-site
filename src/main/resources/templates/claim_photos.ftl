<script src="/bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
<script src="/bootstrap-table/extensions/tableExport.js"></script>
<script src="/bootstrap-table/bootstrap-table-export.js"></script>
<div class="tab-pane fade" id="page-photos" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
				<h1 class="panel-title">no title</h1>
				<div id="panel-toolbar-placeholder"></div>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped" id="image-table"></table>
            </div>
        </div>
    </div>
</div>
<script>
$("#image-table").bootstrapTable({
    url: '/api/claims',
    showColumns: true,
    showToggle: true,
    showExport: true,
    pagination: true,
    sidePagination: 'server',
    exportOptions: {
        fileName: 'claims'
    },
    columns: [{
        field: 'comment',
        title: 'COMMENT',
        sortable: true
    }, {
        field: 'added',
        title: 'ADDED'
    }]
});
// Position between .fixed-table-toolbar and btn-group should be adjusted
$('#page-photos .fixed-table-toolbar .btn-group:first').append('<button id="btn-add" type="button" class="btn btn-default"><a href="#"><i class="glyphicon glyphicon-plus"></i></a></button>')
$('#page-photos #panel-toolbar-placeholder').after($('#page-photos .fixed-table-toolbar'))

$('#page-photos .fixed-table-toolbar').css({
    height: 40,
    marginTop: -15,
    marginBotton: -15
})
</script>
