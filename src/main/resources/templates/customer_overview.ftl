<script src="/bootstrap-table/bootstrap-table.js"></script>
<link rel="stylesheet" href="/bootstrap-table/bootstrap-table.css">
<div class="tab-pane fade in active" id="page-overview" role="tabpanel">
    <div class="col-md-7">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-edit" onclick="ocation.href='/customer/${customer.id!'123456demo'}/customer-info/edit'"></span></li>
                    <li><span class="glyphicon glyphicon-cog" onclick="location.href='/customer/${customer.id!'123456demo'}/customer-info/config'"></span></li>
                </ul>
                <h1 class="panel-title">Customer info</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Customer type</td>
                        <td>${customer.type!}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>${customer.name!}</td>
                    </tr>
                    <tr>
                        <td>Birth date</td>
                        <td>${customer.birthdate!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Contact info</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>E-mail address</td>
                        <td><a href="Mailto:" + ${customer.email!}>${customer.email!}</a></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>${customer.phone_number!}</td>
                    </tr>
                    <tr>
                        <td>Mobile phone</td>
                        <td>${customer.mobile!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Sales channel</td>
                        <td>${customer.sales_channel!}</td>
                    </tr>
                    <tr>
                        <td>Account manager</td>
                        <td>${customer.account_manager!}</td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td>${customer.language!}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-plus" onclick="location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">
                    Customer address
                </h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped" id="address-table">
                	<#if customer.addresses?exists>
	                	<#list customer.addresses as address>
	                	<tr>
	                		<td> ${address.location! location}</td>
	                		<td> ${address.type! type}</td>
	                		<td> ${address.modified_date! modified_date}</td>
	                	</tr>
	                	</#list>
					</#if>
					
                </table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-edit" onclick="location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">
                    Customer profile
                </h1>
            </div>
            <div class="panel-body">
                Field of activity.
            </div>
        </div>
    </div>
    <div class="col-md-5">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Policies</h1></div>
            <div class="panel-body">
                <table class="table table-condensed table-stiped" id="overview-policy-table"></table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-plus" onclick="location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">Notes</h1></div>
            <div class="panel-body">
                No notes
            </div>
        </div>
    </div>
</div>
<script>
$('#address-table').bootstrapTable({
    url: '/api',
    pagination: true,
    sidePagination: 'server',
    columns: [{
        field: 'address',
        title: 'ADDRESS',
        sortable: true
    }, {
        field: 'type',
        title: 'TYPE'
    }, {
        field: 'modified',
        title: 'MODIFIED DATE'
    }]
});
$('#overview-policy-table').bootstrapTable({
    url: '/api/customers/${customer.user_id}/policies',
    pagination: true,
    sidePagination: 'server',
    dataField: 'policies',
    columns: [{
        field: 'status',
        title: 'STATUS',
        sortable: true
    }, {
        field: 'gross_premium_amount',
        title: 'GROSS PREMIUM'
    }, {
        field: 'customer_payable',
        title: 'CUSTOMER PAYABLE'
    }, {
        field: 'commission',
        title: 'COMMISSION'
    }]
});
$('#policy-on-vehicle-table').bootstrapTable({
    url: '/api/customer/policies-on-vehicle',
    pagination: true,
    sidePagination: 'server',
    columns: [{
        field: 'policy_number',
        title: 'POLICY NUMBER',
        sortable: true
    }, {
        field: 'insurer',
        title: 'INSURER'
    }, {
        field: 'validity',
        title: 'VALIDITY'
    }, {
        field: 'customer',
        title: 'CUSTOMER'
    }, {
        field: 'vehicle',
        title: 'VEHICLE'
    }, {
        field: 'status',
        title: 'STATUS'
    }]
})
</script>
