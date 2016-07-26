<script src="../bootstrap-table/bootstrap-table.js"></script>
<link rel="../stylesheet" href="bootstrap-table/bootstrap-table.css">
<script src="../bootstrap-table/extensions/tableExport.js"></script>
<script src="../bootstrap-table/bootstrap-table-export.js"></script>
<div class="tab-pane fade in active" id="page-photos" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>add</span></li>
                </ul>
				<h1 class="panel-title">no title</h1>
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
</script>
