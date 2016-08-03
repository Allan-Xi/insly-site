<div class="tab-pane fade in active" id="page-overview" role="tabpanel">
    <div class="col-md-8">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-edit" onclick="javascript:location.href='#'"></span></li>
                    <li><span class="glyphicon glyphicon-cog" onclick="javascript:location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">Policy infomation</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Customer</td>
                        <td>${insured.name!}</td>
                    </tr>
                    <tr>
                        <td>Coverage</td>
                        <td>${policy.coverage!}</td>
                    </tr>
                    <tr>
                        <td>Vehicle</td>
                        <td>${policy.vehicle!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">policy info</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Policy type</td>
                        <td>${policy.type!}</td>
                    </tr>
                    <tr>
                        <td>Insurer</td>
                        <td>${policy.insurer!}</td>
                    </tr>
                    <tr>
                        <td>policy number</td>
                        <td>${policy.policy_number!}</td>
                    </tr>
                    <tr>
                        <td>issue date</td>
                        <td>${policy.issue_date!}</td>
                    </tr>
                    <tr>
                        <td>start date</td>
                        <td>${policy.inception_unix_secs!}</td>
                    </tr>
                    <tr>
                        <td>end date</td>
                        <td>${policy.expiry_unix_secs!}</td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>${policy.status!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Quote</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Created from quote</td>
                        <td>${quote!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Renewal</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Renewal status</td>
                        <td>${renewal!}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-edit" onclick="javascript:location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">Discount</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed" id="discount-table"></table>
                No discount set.
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Customer payment</h1></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Customer paid</td>
                        <td>${policy.customer_paid!}</td>
                    </tr>
                    <tr>
                        <td>Customer payable</td>
                        <td>${policy.customer_payable!}</td>
                    </tr>
                    <tr>
                        <td>Policy balance</td>
                        <td>${policy.policy_balance!}</td>
                    </tr>
                    <tr class="danger" style="{color:#FF0000}">
                        <td>Sum over due date</td>
                        <td>${policy.due_date!}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Commission</h1></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Commission</td>
                        <td>${policy.commission_percentage!}</td>
                    </tr>
                    <tr>
                        <td>Commission</td>
                        <td>${policy.commission!} USD</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-edit" onclick="javascript:location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">Notes</h1></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed" id="note-table"></table>
            </div>
        </div>
    </div>
</div>
