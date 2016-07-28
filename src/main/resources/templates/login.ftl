<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <base href=".">
    <meta name="MSSmartTagsPreventParsing" content="true">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/fe9d444d3f05d545ce0d47e8781f58ec.1431073749.css">
    <script src="/26a102d687f72041d4582c39390fe09d.1462780767.js"></script>
    <script src="//cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
    <link id="smartlook-style" rel="stylesheet" media="screen">
</head>
<body youdao="bind">
<section id="login-container">
    <div id="login-box" class="rounded">
        <div class="login-panel-first">
            <a target="_blank" href="http://www.insly.com/"><img src="./insly-logo.svg" width="92" height="38"></a>
        </div>
        <section id="login-content">
            <fieldset>
                <div role="form" class="form-horizontal">

                    <!-- Username -->
                    <div class="form-group">
                        <label for="login_username" class="col-sm-4 control-label rounded-left"
                               data-locale="insly.common.email.short">E-mail</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" name="login_username" id="login_username"
                                   autocomplete="off" required="" autofocus="">
                        </div>
                    </div>

                    <!-- password -->
                    <div class="form-group">
                        <label for="login_password" class="col-sm-4 control-label rounded-left"
                               data-locale="insly.common.password">Password</label>
                        <div class="col-sm-8">
                            <input type="password" class="form-control" name="login_password" id="login_password"
                                   autocomplete="off">
                        </div>
                    </div>
                    <!-- Language -->
                    <div class="form-group">
                        <label for="login_lang" class="col-sm-4 control-label rounded-left"
                               data-locale="insly.common.language">Language</label>
                        <div class="col-sm-8">
                            <select name="login_lang" id="login_lang" class="full-width"
                                    onchange="RELOADLOCALE.reloadLocale()">
                                <option value="en">english</option>
                                <option value="et">eesti</option>
                                <option value="lv">latviešu</option>
                                <option value="lt">lietuvių</option>
                                <option value="ru">русский</option>
                                <option value="de">deutsch</option>
                                <option value="fr">français</option>
                                <option value="es">español</option>
                                <option value="it">italiano</option>
                                <option value="pt">português (portugal)</option>
                                <option value="ro">română</option>
                                <option value="pl">polski</option>
                            </select>
                        </div>
                    </div>
                    <button class="primary pull-right" name="login_submit" value="login_submit"
                            id="login_submit" data-locale="insly.login.submit" onclick="location='/customer'">Log in
                    </button>
                </div>
            </fieldset>
        </section>

    </div>
    <div id="login-footer">
        <div id="footer-left"><a href="#" data-locale="insly.login.forgotpwd">Forgot my password</a></div>
    </div>
</section>

<script type="text/javascript">var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-50883432-1']);
_gaq.push(['_trackPageview']);
(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();</script>
<div id="smartlook-ct"></div>
</body>
</html>