<div class="tab-pane fade in active" id="page-overview" role="tabpanel" >
    <div class="col-md-8">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <strong>policy info</strong>
            </div>
            <div class="panel-collapse panel-body">
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
                <strong>policy info</strong>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Policy type</td>
                        <td>${policy_type!}</td>
                    </tr>
                    <tr>
                        <td>Insurer</td>
                        <td>${insurer!}</td>
                    </tr>
                    <tr>
                        <td>policy number</td>
                        <td>${policy_number!}</td>
                    </tr>
                    <tr>
                        <td>issue date</td>
                        <td>${issue_date!}</td>
                    </tr>
                    <tr>
                        <td>start date</td>
                        <td>${start_date!}</td>
                    </tr>
                    <tr>
                        <td>end date</td>
                        <td>${end_date!}</td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>${status!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <strong>Sales</strong>
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
                <strong>Previous policy</strong>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Previous Policy</td>
                        <td>${previous_policy!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <strong>Quote</strong>
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
                <strong>Renewal</strong>
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
            <div class="panel-heading"><strong>Premium</strong></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Gross premium</td>
                        <td>${gross_premium!}</td>
                    </tr>
                    <tr>
                        <td>Installments</td>
                        <td>${installments!}</td>
                    </tr>
                    <tr>
                        <td>Collection</td>
                        <td>${collection!}</td>
                    </tr>
                    <tr>
                        <td>Net premium</td>
                        <td>${net_premium!}</td>
                    </tr>
                </table>
            </div>
            <strong><div class="panel-heading">Discount</div></strong>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed" id="discount-table"></table>
            </div>
            <div class="panel-heading"><strong>Customer payment</strong></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Customer paid</td>
                        <td>${customer_paid!}</td>
                    </tr>
                    <tr>
                        <td>Customer payable</td>
                        <td>${customer_payable!}</td>
                    </tr>
                    <tr>
                        <td>Policy balance</td>
                        <td>${policy_balance!}</td>
                    </tr>
                    <tr class="table-warning">
                        <td>Sum over due date</td>
                        <td>${due_date!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading"><strong>Commission</strong></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Commission</td>
                        <td>${commission!}</td>
                    </tr>
                    <tr>
                        <td>Commission</td>
                        <td>${commission!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading"><strong>Notes</strong></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed"></table>
            </div>
        </div>
    </div>
</div>
