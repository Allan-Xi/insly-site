<div class="tab-pane fade in active" id="page-overview" role="tabpanel">
    <div class="col-md-8">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>edit</span></li>
                    <li><span>settings</span></li>
                </ul>
                <h1 class="panel-title">Customer info</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed">
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
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>E-mail address</td>
                        <td>${customer.email!}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>${customer.phone!}</td>
                    </tr>
                    <tr>
                        <td>Mobile phone</td>
                        <td>${customer.mobile!}</td>
                    </tr>
                    <tr>
                        <td>Preferred communication channel</td>
                        <td>${customer.channel!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Customer management</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed">
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
                        <td>English ${customer.language!}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>add</span></li>
                </ul>
                <h1 class="panel-title">
        			Customer address
        		</h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped" id="address-table"></table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>edit</span></li>
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
    <div class="col-md-4">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Customer balance</h1></div>
            <div class="panel-body">
                <label>${customer.balance!}</label>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Policies</h1></div>
            <div class="panel-body">
                <table class="table table-condensed table-stiped" id="overview-policy-table"></table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Sales opportunities</h1></div>
            <div class="panel-body">
                Field of activity not chosen.
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>add</span></li>
                </ul>
                <h1 class="panel-title">Tasks</h1></div>
            <div class="panel-body">
                <table class="table table-condensed table-stiped" id="task-table"></table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>add</span></li>
                </ul>
                <h1 class="panel-title">Notes</h1></div>
            <div class="panel-body">
                No notes
            </div>
        </div>
    </div>
</div>