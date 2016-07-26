<#include "header.ftl">
<#include "nav.ftl">
<body>
	<div class="navbar container-fluid" role="navigation">
		<div class="navbar-nav">
		<h3>Customer: ${customer_name!"Visitor"}</h3>
		</div>
	    <div class="navbar-right btn-group" role="toolbar">
	    	<button type="button" class="btn btn-default">cancel</button>
	  		<button type="button" class="btn btn-default">copy</button>
	  		<button type="button" class="btn btn-default">renewal</button>
	    </div>
	</div>

	<nav class="navbar navbar-default" role="navigation">
	    <div>
	        <ul class="nav navbar-nav" id="customer-tabs">
	            <li class="active"><a href="#page-overview" data-toggle="tab">OVERVIEW</a></li>
	            <li><a href="#page-policies" data-toggle="tab">POLICIES</a></li>
	            <li><a href="#page-vehicles" data-toggle="tab">VEHICLES(?)</a></li>
	            <li><a href="#page-quotes" data-toggle="tab">QUOTES(?)</a></li>
	            <li><a href="#page-invoices" data-toggle="tab">INVOICES(?)</a></li>
	            <li><a href="#page-documents" data-toggle="tab">DOCUMENTS</a></li>
	            <li><a href="#page-claims" data-toggle="tab">CLAIMS</a></li>
	            <li><a href="#page-crm" data-toggle="tab">CRM</a></li>
	            <li><a href="#page-log" data-toggle="tab">LOG</a></li>
	        </ul>
	    </div>
	</nav>
    <div class="container-fluid">
	    <div id="page-container" class="tab-content">
	    	<#include "customer_overview.ftl">
	    	<#include "customer_policies.ftl">
	    	<#include "customer_vehicles.ftl">
	    	<#include "customer_quotes.ftl">
	    	<#include "customer_claims.ftl">
	    	<#include "customer_crm.ftl">
	    </div>
    </div>

</body>

<script>
	$("#customer-tabs").click(function(e){
		e.preventDefault();
		$(this).tab('show');
	})
</script>