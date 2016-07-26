<div class="tab-pane fade" id="page-coverage" role="tabpanel">
    <div class="col-md-12">
        <div class="panel panel-default open">
            <div class="panel-heading">
                <h1 class="panel-title">Motor Insurance</h1>
            </div>
            <div class="panel-body">
                <table class="table table-condensed table-striped">
                    <tr class="field">
                        <td>COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="motor-coverage">full coverage
                            <!-- @{motor.coverage!} -->
                        </td>
                    </tr>
                    <tr class="field">
                        <td>THRID PARTY LIABILITY PROPERTY: COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-property">500.00
                            <!-- @{motor.tp_property!} -->USD</td>
                    </tr>
                    <tr class="field">
                        <td>THIRD PARTY LIABILITY: HEALTH COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-health">500
                            <!-- @{motor.tp_health!} -->
                        </td>
                    </tr>
                    <tr class="field">
                        <td>THIRD PARTY LIABILITY: DEDUCTIBLE</td>
                        <td>
                            <input type="text" class="hidden" id="motor-tp-deductible">100
                            <!-- @{motor.tp_deductible!} -->
                        </td>
                    </tr>
                    <tr class="field">
                        <td>OWN DAMAGE: PROPERTY COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="own-property">400
                            <!-- @{motor.own_property!} -->
                        </td>
                    </tr>
                    <tr class="field">
                        <td>OWN DAMAGE: HEALTH COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="own-health">400
                            <!-- @{motor.own_health!} -->
                        </td>
                    </tr>
                    <tr class="field">
                        <td>OWN DAMAGE: DEDUCTIBLE</td>
                        <td>
                            <input type="text" class="hidden" id="own-deductible">400
                            <!-- @{motor.own_deductible!} -->
                        </td>
                    </tr>
                    <tr class="field">
                        <td>NEW VALUE COVERAGE</td>
                        <td>
                            <input type="text" class="hidden" id="value-coverage">yes
                            <!-- @{motor.value_coverage!} -->
                        </td>
                    </tr>
                    <tr class="field">
                        <td>COURTESY CAR</td>
                        <td>
                            <input type="text" class="hidden" id="courtesy-car">yes
                            <!-- @{motor.curtesy!} -->
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
                            <!-- @{commission!} -->
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