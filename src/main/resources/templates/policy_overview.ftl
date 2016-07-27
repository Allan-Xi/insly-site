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
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Customer</td>
                        <td>${policy.customer!}</td>
                    </tr>
                    <tr>
                        <td>Coverage</td>
                        <td>${policy.coverage!}</td>
                    </tr>
                    <tr>
                        <td>Object</td>
                        <td>${policy.object!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">policy info</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
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
                        <td>${policy.number!}</td>
                    </tr>
                    <tr>
                        <td>issue date</td>
                        <td>${policy.issue_date!}</td>
                    </tr>
                    <tr>
                        <td>start date</td>
                        <td>${policy.start_date!}</td>
                    </tr>
                    <tr>
                        <td>end date</td>
                        <td>${policy.end_date!}</td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>${policy.status!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Sales</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Sales type</td>
                        <td>${sales_type!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Previous policy</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Previous Policy</td>
                        <td>${previous_policy!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Quote</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
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
                <table class="table table-striped table-condensed">
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
                <h1 class="panel-title">Premium</h1></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Gross premium</td>
                        <td>${policy.gross_premium!} USD</td>
                    </tr>
                    <tr>
                        <td>Installments</td>
                        <td>${policy.installments!}</td>
                    </tr>
                    <tr>
                        <td>Collection</td>
                        <td>${policy.collection!}</td>
                    </tr>
                    <tr>
                        <td>Net premium</td>
                        <td>${policy.net_premium!} USD</td>
                    </tr>
                </table>
            </div>
        </div>
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
                <table class="table table-striped table-condensed">
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
                <table class="table table-striped table-condensed">
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
                <table class="table table-striped table-condensed"></table>
            </div>
        </div>
    </div>
</div>

<script>
$('#page-overview td').attr('width', '50%');
</script>
