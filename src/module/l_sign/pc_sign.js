import "css/reset.css";
import "css/basic.scss";
import "./css/m-sign.scss";

import "js/pc_validate.js"

var $form = $("form");
var $password = $($("[type=password]")[0]);
var $passAgain = $($("[type=password]")[1]);
var pop = false;
$form.on("submit", function(){
    if ($form.data("isOk") == true && $password.val() != $passAgain.val() && !pop) {
        layer.open({
            title: 'tips:',
            content: "两次密码不一致"
        });  
        pop = true;
        setTimeout(function(){
            pop = false;
        }, 1000);
        return false;
    }
});
