<#include "header.ftl"/>
<body id="customers">
<h1>Demo Broker</h1>
<#include "nav.ftl"/>
<div class="container">
    <div>
        <h2>Add a customer</h2>
    </div>
    <form class="form-horizontal">
        <div class="form-group">
            <label for="inputCustomerType" class="col-sm-2 control-label">CUSTOMER TYPE</label>
            <div class="col-sm-10">
                <label class="radio-inline"><input id="optradio-company" type="radio" name="optradio" checked="">COMPANY</label>
                <label class="radio-inline"><input id="optradio-individual" type="radio" name="optradio">INDIVIDUAL</label>
            </div>
        </div>
        <div id="company-group">
            <div class="form-group">
                <label for="inputName" class="col-sm-2 control-label">NAME</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputName">
                </div>
            </div>
        </div>
        <div id="individual-group" class="hidden">
            <div class="form-group">
                <label for="inputFirstName" class="col-sm-2 control-label">FIRST NAME</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputFirstName">
                </div>
            </div>
            <div class="form-group">
                <label for="inputLastName" class="col-sm-2 control-label">LAST NAME</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputLastName">
                </div>
            </div>
            <div class="form-group">
                <label for="inputBirthDate" class="col-sm-2 control-label">BIRTH DATE</label>
                <div class="col-sm-10">
                    <input type="date" class="form-control" id="inputBirthDate">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="inputEmail" class="col-sm-2 control-label">E-MAIL ADDRESS</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail">
            </div>
        </div>
        <div class="form-group">
            <label for="inputPhone" class="col-sm-2 control-label">PHONE</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPhone">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Add</button>
        <button type="button" class="btn btn-primary" onclick="location='/customer'">Cancel</button>
    </form>
</div>

<script>
    $('#optradio-company').click(function () {
        $('#company-group').removeClass('hidden')
        $('#individual-group').addClass('hidden')
    })
    $('#optradio-individual').click(function () {
        $('#company-group').addClass('hidden')
        $('#individual-group').removeClass('hidden')
    })
</script>

</body>
</html>
