<#include "header.ftl">
<#include "nav.ftl">
<body id="claim">
    <div class="container-fluid">
        <div class="navbar" role="navigation">
            <div class="navbar-nav">
                <h3>Claim: ${claim.id!"1234567890"}</h3>
            </div>
            <div class="navbar-right btn-group" role="toolbar">
                <button type="button" class="btn btn-default">Update claim status</button>
            </div>
        </div>
        <div class="navbar">
            <ul class="nav nav-pills" id="policy-tabs">
                <li class="active"><a href="#page-overview" data-toggle="tab">OVERVIEW</a></li>
                <li><a href="#page-progress" data-toggle="tab">PROGRESS</a></li>
                <li><a href="#page-documents" data-toggle="tab">DOCUMENTS</a></li>
                <li><a href="#page-photos" data-toggle="tab">PHOTOS</a></li>
                <li><a href="#page-crm" data-toggle="tab">CRM</a></li>
            </ul>
        </div>
        <div class="container-fluid">
            <div id="page-container" class="tab-content">
                <!-- temp solution. we should use ajax to fill the conatiner.  -->
        		<!-- TODO: add routes in WebController. -->
				<#include "claim_overview.ftl">
                <#include "claim_photos.ftl">
            </div>
        </div>
    </div>
</body>
<script>
$("#policy-tabs").click(function(e) {
    e.preventDefault();
    $(this).tab('show');
})
</script>
