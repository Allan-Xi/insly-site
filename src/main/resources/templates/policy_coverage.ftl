<div class="tab-pane fade" id="page-coverage" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
            <ul class="panel-actions list-inline pull-right">
                    <ls><span class="glyphicon glyphicon-edit"></span></ls>
                    <ls><span class="glyphicon glyphicon-trash"></span></ls>
                </ul>
                <h1 class="panel-title">Motor Insurance</h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped">
                    <tr class="field">
                        <td>COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="motor-coverage">
                            ${motor.customer!}
                        </td>
                    </tr>
                    <tr class="field">
                        <td>THRID PARTY LIABILITY PROPERTY: COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-property">
                            ${motor.tp_property!} USD</td>
                    </tr>
                    <tr class="field">
                        <td>THIRD PARTY LIABILITY: HEALTH COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-health">
                            ${motor.tp_health!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>THIRD PARTY LIABILITY: DEDUCTIBLE</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-deductible">
                            ${motor.tp_deductible!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>OWN DAMAGE: PROPERTY COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="own-property">
                            ${motor.own_property!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>OWN DAMAGE: HEALTH COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="own-health">
                            ${motor.own_health!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>OWN DAMAGE: DEDUCTIBLE</td>
                        <td>
                            <input type="text" class="hidden" id="own-deductible">
                            ${motor.own_deductible!} USD
                        </td>
                    </tr>
                    <tr class="field">
                        <td>NEW VALUE COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="value-coverage">
                            ${motor.value_coverage!}
                        </td>
                    </tr>
                    <tr class="field">
                        <td>COURTESY CAR</td>
                        <td>
                            <input type="text" class="hidden" id="courtesy-car">
                            ${motor.curtesy_car!}
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
                            <input type="text" class="hidden" id="commission">10%
                            ${commission!}
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