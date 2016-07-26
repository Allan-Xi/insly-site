<div class="tab-pane fade in active" id="page-overview" role="tabpanel">
    <div class="col-md-8">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>edit</span></li>
                    <li><span>settings</span></li>
                </ul>
                <h1 class="panel-title">Claim infomation</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Claim ID</td>
                        <td>${claim.id!}</td>
                    </tr>
                    <tr>
                        <td>Customer</td>
                        <td>${claim.customer!}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>${claim.status!}</td>
                    </tr>
                    <tr>
                        <td>Incident/loss date</td>
                        <td>${claim.incident_loss_date!}</td>
                    </tr>
                    <tr>
                        <td>Date submitted to broker</td>
                        <td>${claim.date_submitted!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Policy</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Policy</td>
                        <td>${policy.policy_number!}</td>
                    </tr>
                    <tr>
                        <td>Insurer</td>
                        <td>${policy.insurer!}</td>
                    </tr>
                    <tr>
                        <td>Product</td>
                        <td>${policy.product!}</td>
                    </tr>
                    <tr>
                        <td>Start date</td>
                        <td>${policy.start_date!}</td>
                    </tr>
                    <tr>
                        <td>End date</td>
                        <td>${policy.end_date!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Loss Information</h1>
            </div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Location of loss or incident</td>
                        <td>${claim.location!}</td>
                    </tr>
                    <tr>
                        <td>Loss/damage description</td>
                        <td>${claim.loss_description!}</td>
                    </tr>
                    <tr>
                        <td>Injury description</td>
                        <td>${claim.injury_description!}</td>
                    </tr>
                    <tr>
                        <td>Incident circumstances</td>
                        <td>${claim.incident_circumstances!}</td>
                    </tr>
                    <tr>
                        <td>Claim info</td>
                        <td>${claim.info!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Insurer contacts</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Insurer contact name</td>
                        <td>${insurer.contact_name!}</td>
                    </tr>
                    <tr>
                        <td>Insurer contact e-mail</td>
                        <td>${insurer.email!}</td>
                    </tr>
                    <tr>
                        <td>Insurer contact phone</td>
                        <td>${insurer.phone!}</td>
                    </tr>
                    <tr>
                        <td>Insurer reference ID</td>
                        <td>${insurer.id!}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>edit</span></li>
                </ul>
                <h1 class="panel-title">Claimant(s)</h1>
            </div>
            <div class="panel-body">
                <!-- should use freemaker list here -->
                <table class="table table-condensed table-striped">
                    <caption>Claimant #1</caption>
                    <tr>
                        <td>Type</td>
                        <td>${claimant.type!}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>${claimant.name!}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>${claimant.Address!}</td>
                    </tr>
                    <tr>
                        <td>Claimant e-mail address</td>
                        <td>${claimant.email!}</td>
                    </tr>
                    <tr>
                        <td>Claimant telephone no</td>
                        <td>${claimant.telephone!}</td>
                    </tr>
                    <tr>
                        <td>Claimant date of birth</td>
                        <td>${claimant.birthdate!}</td>
                    </tr>
                    <tr>
                        <td>Claimant info</td>
                        <td>${claimant.info!}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>edit</span></li>
                </ul>
                <h1 class="panel-title">Amounts</h1></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed">
                    <tr>
                        <td>Loss amount</td>
                        <td>${claim.loss_amount!} USD</td>
                    </tr>
                    <tr>
                        <td>Excess/deducible</td>
                        <td>${claim.deducible!} USD</td>
                    </tr>
                </table>
            </div>
        </div>
                <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span>add</span></li>
                </ul>
                <h1 class="panel-title">Note</h1></div>
            <div class="panel-collapse panel-body">
                No notes.
            </div>
        </div>
    </div>
</div>
