<#include "header.ftl">
<#include "nav.ftl">
<body>
	<div class="navbar container-fluid" role="navigation">
		<div class="navbar-nav">
		<h3>Policy: ${policy_number!"xxxx"}</h3>
		</div>
	    <div class="navbar-right btn-group" role="toolbar">
	    	<button type="button" class="btn btn-default">cancel</button>
	  		<button type="button" class="btn btn-default">copy</button>
	  		<button type="button" class="btn btn-default">renewal</button>
	    </div>
	</div>

	<nav class="navbar navbar-default" role="navigation">
	    <div>
	        <ul class="nav navbar-nav" id="policy-tabs">
	            <li class="active"><a href="#page-overview" data-toggle="tab">OVERVIEW</a></li>
	            <li><a href="#page-coverage" data-toggle="tab">COVERAGE</a></li>
	            <li><a href="#page-installment" data-toggle="tab">INSTALLMENT SCHEDULE</a></li>
	            <li><a href="#page-documents" data-toggle="tab">DOCUMENTS</a></li>
	            <li><a href="#page-claims" data-toggle="tab">CLAIMS</a></li>
	            <li><a href="#page-crm" data-toggle="tab">CRM</a></li>
	            <li><a href="#page-log" data-toggle="tab">LOG</a></li>
	        </ul>
	    </div>
	</nav>
    <div class="container-fluid">
	    <div id="page-container" class="tab-content">
	    	<#include "policy_overview.ftl">
	    	<#include "policy_coverage.ftl">
	    	<#include "policy_claims.ftl">
	    </div>
    </div>

</body>

<script>
	$("#policy-tabs").click(function(e){
		e.preventDefault();
		$(this).tab('show');
	})
</script>