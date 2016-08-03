<#include "header.ftl">
<#include "nav.ftl">
<body id="policies" class="container-fluid">
    <div class="navbar" role="navigation">
        <div class="navbar-nav">
            <h3>Policy: ${policy.policy_number!"xxxx"}</h3>
        </div>
    </div>
    <div class="navbar">
        <ul class="nav nav-pills" id="policy-tabs">
            <li class="active"><a href="#page-overview" data-toggle="tab">OVERVIEW</a></li>
            <li><a href="#page-coverage" data-toggle="tab">COVERAGE</a></li>
            <li><a href="#page-documents" data-toggle="tab">DOCUMENTS</a></li>
            <li><a href="#page-claims" data-toggle="tab">CLAIMS</a></li>
            <li><a href="#page-crm" data-toggle="tab">CRM</a></li>
        </ul>
    </div>
    <div class="container-fluid">
        <div id="page-container" class="tab-content">
			<!-- temp solution. we should use ajax to fill the conatiner.  -->
			<!-- TODO: add routes in WebController. -->
			<#include "policy_overview.ftl">
            <#include "policy_coverage.ftl">
            <#include "policy_claims.ftl">
        </div>
    </div>
</body>
<script>
$("#policy-tabs").click(function(e) {
    e.preventDefault();
    $(this).tab('show');
})
</script>
