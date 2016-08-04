<div class="tab-pane fade" id="page-coverage" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <ul class="panel-actions list-inline pull-right">
                    <ls><span class="glyphicon glyphicon-edit"></span></ls>
                    <ls><span class="glyphicon glyphicon-trash"></span></ls>
                </ul>
                <h1 class="panel-title">Insurance</h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped">
                    <tr class="field">
                        <td>Customer</td>
                        <td>
                            <input type="text" class="hidden" id="motor-coverage"> ${insured.name!}
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Bodily Injury Liability Per Person</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-property"> ${policy.bi_limit_per_person!} USD</td>
                    </tr>
                    <tr class="field">
                        <td>Bodily Injury Liability Per Accident</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-health"> ${policy.bi_limit_per_accident!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Property Damage Liability</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-deductible"> ${policy.pd_limit!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Collision Deductible</td>
                        <td>
                            <input type="text" class="hidden" id="own-property"> ${policy.coll_deductible!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Comprehensive Deductible</td>
                        <td>
                            <input type="text" class="hidden" id="own-health"> ${policy.comp_deductible!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Uninsured Motorist Bodily Injury Liablity Per Person</td>
                        <td>
                            <input type="text" class="hidden" id="own-deductible"> ${policy.umbi_limit_per_person!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Uninsured Motorist Bodily Injury Liablity Per Accident</td>
                        <td>
                            <input type="text" class="hidden" id="value-coverage"> ${policy.umbi_limit_per_accident!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Uninsured Motorist Property Damage Liability</td>
                        <td>
                            <input type="text" class="hidden" id="own-deductible"> ${policy.umpd!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Collision Damage Waiver</td>
                        <td>
                            <input type="text" class="hidden" id="own-deductible"> ${policy.cdw_waiver?string('Yes','No')!}
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Rental Car</td>
                        <td>
                            <input type="text" class="hidden" id="own-deductible"> ${policy.rental_car?string('Yes','No')!}
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Roadside Assistance</td>
                        <td>
                            <input type="text" class="hidden" id="courtesy-car"> ${policy.roadside_assistance?string('Yes','No')!}
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Lease Gap Coverage</td>
                        <td>
                            <input type="text" class="hidden" id="courtesy-car"> ${policy.lease_gap_coverage?string('Yes','No')!}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="panel-heading">
                <h1 class="panel-title">Commission</h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped">
                    <tr>
                        <td>COMMISSION</td>
                        <td>
                            <input type="text" class="hidden" id="commission">10% ${commission!}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h1 class="panel-title">Vehicle</h1>
            </div>
            <div class="panel-body">
            </div>
        </div>
    </div>
</div>
<script>
$('#page-coverage td').attr('width', '50%');
</script>
