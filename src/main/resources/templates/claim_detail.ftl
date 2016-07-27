<#include "header.ftl">
<#include "nav.ftl">
<body id="claim">
    <div class="navbar container-fluid" role="navigation">
        <div class="navbar-nav">
        <h3>Claim: ${policy_number!"1234567890"}</h3>
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
                <li><a href="#page-progress" data-toggle="tab">PROGRESS</a></li>
                <li><a href="#page-documents" data-toggle="tab">DOCUMENTS</a></li>
                <li><a href="#page-photos" data-toggle="tab">PHOTOS</a></li>
                <li><a href="#page-crm" data-toggle="tab">CRM</a></li>
                <li><a href="#page-log" data-toggle="tab">LOG</a></li>
            </ul>
        </div>
    </nav>
    <div class="container-fluid">
        <div id="page-container" class="tab-content">
            <#include "claim_overview.ftl">
            <#include "claim_photos.ftl">
        </div>
    </div>

</body>

<script>
    $("#policy-tabs").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    })
</script>
<script src="../common.js">
</script>