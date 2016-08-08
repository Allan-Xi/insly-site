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
                            <input type="text" class="hidden" id="motor-tp-property"> ${policy.bi_limit_per_person! 0} USD</td>
                    </tr>
                    <tr class="field">
                        <td>Bodily Injury Liability Per Accident</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-health"> ${policy.bi_limit_per_accident! 0} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Property Damage Liability</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-deductible"> ${policy.pd_limit! 0} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Collision Deductible</td>
                        <td>
                            <input type="text" class="hidden" id="own-property"> ${policy.coll_deductible! 0} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Comprehensive Deductible</td>
                        <td>
                            <input type="text" class="hidden" id="own-health"> ${policy.comp_deductible! 0} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Uninsured Motorist Bodily Injury Liablity Per Person</td>
                        <td>
                            <input type="text" class="hidden" id="own-deductible"> ${policy.umbi_limit_per_person! 0} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Uninsured Motorist Bodily Injury Liablity Per Accident</td>
                        <td>
                            <input type="text" class="hidden" id="value-coverage"> ${policy.umbi_limit_per_accident! 0} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>Uninsured Motorist Property Damage Liability</td>
                        <td>
                            <input type="text" class="hidden" id="own-deductible"> ${policy.umpd! 0} USD
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


