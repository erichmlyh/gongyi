import "css/reset.css";
import "css/w-common.scss";
import "css/w-trianglebg.scss";
import "css/w-banner.scss";

import "./css/w-register.scss";

import "common/js/validate.js";

var $form = $("form");
var $password = $($("[type=password]")[0]);
var $passAgain = $($("[type=password]")[1]);
$form.on("submit", function(){
    if ($form.data("isOk") == true && $password.val() != $passAgain.val()) {
        alert("两次密码不一致");
    }
});

