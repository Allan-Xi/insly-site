<div class="tab-pane fade in active" id="page-overview" role="tabpanel">
    <div class="col-md-8">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-edit" onclick="javascript:location.href='#'"></span></li>
                    <li><span class="glyphicon glyphicon-cog" onclick="javascript:location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">Claim infomation</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Claim ID</td>
                        <td>${claim.claim_id!}</td>
                    </tr>
                    <tr>
                        <td>Driver</td>
                        <td>${insured.name!}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>${claim.status!}</td>
                    </tr>
                    <tr>
                        <td>Accident Date</td>
                        <td>${claim.accident_time_unix_secs!}</td>
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
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Policy</td>
                        <td>${policy.policy_id!}</td>
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
                        <td>Inception Date</td>
                        <td>${policy.inception_unix_secs!}</td>
                    </tr>
                    <tr>
                        <td>Expiry Date</td>
                        <td>${policy.expiry_unix_secs!}</td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Insured contacts</h1>
            </div>
            <div class="panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
                    <tr>
                        <td>Insured contact name</td>
                        <td>${insured.name!}</td>
                    </tr>
                    <tr>
                        <td>Insurer contact e-mail</td>
                        <td>${insured.email!}</td>
                    </tr>
                    <tr>
                        <td>Insurer contact phone</td>
                        <td>${insured.phone!}</td>
                    </tr>
                    <tr>
                        <td>Insurer reference ID</td>
                        <td>${insured.user_id!}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <li><span class="glyphicon glyphicon-edit" onclick="javascript:location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">Claimant(s)</h1>
            </div>
            <div class="panel-body">
                <!-- should use freemaker list here -->
                <table class="table table-condensed table-striped aligned-table-col-2">
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
                        <td>${claimant.address!}</td>
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
                    <li><span class="glyphicon glyphicon-edit" onclick="javascript:location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">Amounts</h1></div>
            <div class="panel-collapse panel-body">
                <table class="table table-striped table-condensed aligned-table-col-2">
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
                <ul class="panel-actions list-inline pull-right aligned-table-col-2">
                    <li><span class="glyphicon glyphicon-plus" onclick="javascript:location.href='#'"></span></li>
                </ul>
                <h1 class="panel-title">Note</h1></div>
            <div class="panel-collapse panel-body">
                No notes.
            </div>
        </div>
        <div class="panel panel-primary open">
            <div class="panel-heading">
                <h1 class="panel-title">
                    General Information
                </h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped aligned-table-col-2">
                    <tr>
                        <td>Location</td>
                        <td>${claim.location_of_incident!}</td>
                    </tr>
                    <tr>
                        <td>Lat/Lng</td>
                        <td>${claim.accident_location_lat!},${claim.accident_location_long!}</td>
                    </tr>
                    <tr>
                        <td>Accident Type</td>
                        <td>${claim.type!}</td>
                    </tr>
                    <tr>
                        <td>Voice Recording</td>
                        <td>${claim.voice_recording!}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel panel-primary open">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Policyholder Vehicle Information
                </h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped">
                    <tr>
                        <td>Damage Drawing:</td>
                        <td class="img-cell"><img src=${claim.damage_drawing! "/images/damage_drawing.png"} alt="damage drawing"></td>
                    </tr>
                    <tr>
                        <td>Damage Selection:</td>
                        <td>${claim.damage_selection!}</td>
                    </tr>
                    <tr>
                        <td>Damage Photos</td>
                        <td>
                            <!-- temp solution. TODO: should use freemaker #list as here. -->
                            <table class="img-condensed-table">
                            	<#list claim.own_vehicle_photo_urls as photo>
                                	<#if ((photo?counter)-1)%3 == 0>
                                		<tr>
                                	</#if>
                                		<td>
                                			<img src=${photo} alt="damage photos">
                                		</td>
                                	<#if ((photo?counter-1)-2)%3 == 0>
                                		</tr>
                                	</#if>	
                                </#list>
                            </table>
                        </td>
                </table>
            </div>
        </div>
        <div class="panel panel-primary open">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Other Vehicle Information
                </h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped">
                    <tr>
                        <td>Damage Drawing:</td>
                        <td class="img-cell"><img src=${claim.damage_drawing! "/images/damage_drawing.png"} alt="damage drawing"></td>
                    </tr>
                    <tr>
                        <td>Damage Selection:</td>
                        <td>${claim.damage_selection!}</td>
                    </tr>
                    <tr>
                        <td>Damage Photos</td>
                        <td>
                            <!-- temp solution. should use freemaker #list as here. -->
                            <table class="img-condensed-table">
								<#list claim.own_vehicle_photo_urls as photo>
                                	<#if ((photo?counter)-1)%3 == 0>
                                		<tr>
                                	</#if>
                                		<td>
                                			<img src=${photo} alt="damage photos">
                                		</td>
                                	<#if ((photo?counter-1)-2)%3 == 0>
                                		</tr>
                                	</#if>	
                                </#list>
                            </table>
                        </td>
                </table>
            </div>
        </div>
    </div>
</div>
<script>

$('#page-overview .img-cell img').attr('height', '60%');
$('#page-overview .img-condensed-table img').attr('height', '10%');
$('#page-overview img').css('margin', '3px');
</script>
