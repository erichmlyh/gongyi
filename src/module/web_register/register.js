import "css/reset.css";
import "css/w-common.scss";
import "css/w-trianglebg.scss";
import "css/w-banner.scss";

import "./css/w-register.scss";

import "common/js/validate.js";

var $form = $("form");
var $password = $($("[type=password]")[0]);
var $passAgain = $($("[type=password]")[1]);
var pop = false;

$form.on("submit", function(){
    if ($form.data("isOk") == true && $password.val() != $passAgain.val() && !pop) {
        alert("两次密码不一致");
        pop = true;
        setTimeout(function(){
            pop = false;
        }, 1000);
        return false;
    }
});

