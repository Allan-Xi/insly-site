<#include "header.ftl"/>
<body id="customers">
<script src="/common.js"></script>
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
                <label class="radio-inline"><input type="radio" name="optradio" checked="">COMPANY</label>
                <label class="radio-inline"><input type="radio" name="optradio">INDIVIDUAL</label>
            </div>
        </div>
        <div class="form-group">
            <label for="inputName" class="col-sm-2 control-label">NAME</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputName">
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
        <button type="submit" class="btn btn-primary">Login</button>
        <button class="btn btn-primary">Cancel</button>
    </form>
</div>
</body>
</html>
