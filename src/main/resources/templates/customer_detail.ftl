<#include "header.ftl">
<#include "nav.ftl">

<body id="customer">
    <div class="navbar container-fluid" role="navigation">
        <div class="navbar-nav">
            <h3>Customer: ${customer.name!"Visitor"}</h3>
        </div>
    </div>
    <div class="navbar">
        <ul class="nav nav-pills" id="customer-tabs">
            <li class="active"><a href="#page-overview" data-toggle="tab">OVERVIEW</a></li>
            <li><a href="#page-policies" data-toggle="tab">POLICIES (${customer.policies?size})</a></li>
            <li><a href="#page-vehicles" data-toggle="tab">VEHICLES (${customer.vehicles?size})</a></li>
            <li><a href="#page-quotes" data-toggle="tab">QUOTES</a></li>
            <li><a href="#page-invoices" data-toggle="tab">INVOICES</a></li>
            <li><a href="#page-claims" data-toggle="tab">CLAIMS (${customer.claims?size})</a></li>
            <li><a href="#page-crm" data-toggle="tab">CRM</a></li>
        </ul>
    </div>
    <div class="container-fluid">
        <div id="page-container" class="tab-content">
        <!-- temp solution. we should use ajax to fill the conatiner.  -->
        <!-- TODO: add routes in WebController. -->
            
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
$("#customer-tabs").click(function(e) {
    e.preventDefault();
    $(this).tab('show');
})
</script>
