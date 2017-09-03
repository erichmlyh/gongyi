import "css/reset.css";
import "css/w-common.scss";
import "css/w-trianglebg.scss";
import "css/w-banner.scss";

import "./css/w-baoming.scss";
import "./css/w-tc.scss";

new Kalendae.Input("muliti-date", {
    months:1,
    mode:'multiple',
    format: 'YYYY-MM-DD'
});

(function() {
    var $form = $("form");
    var regRule = {
        require: function(val, el) {
            if (el.type == "radio") {
                var $radio = $form.find("[name=" + el.name + "]");
                var isChekcked = false;
                $.each($radio, function(idx, radio){
                    if (radio.checked) {
                        isChekcked = true;
                        return false;
                    }
                });
                return isChekcked;
            }
            if (el.type == "checkbox") {
                return el.checked;
            }
            return !!$.trim(val);
        },
        identity: function(val) {
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val);
        },
        email: function(val) {
            return /\w@\w*\.\w/.test(val);
        },
        phone: function(val) {
            return /^1[0-9]{10}$/.test(val);
        }
    }
    $(".J-baoming").on("click", function(e) {
        if ($form.data("isOk")) {
            $("#tc").show();
            return;
        }
        e.preventDefault();
        var isOk = true; // 校验是否ok
        var errorMsg = ""; // 校验失败错误信息
        var $ele = $form.find("[data-reg]");
        $ele.each(function(idx, el){
            var $el = $(el);
            var reg = $el.data("reg");
            // 校验通过
            if (reg && regRule[reg] && regRule[reg](el.value, el)) {
                return true;
            }
            isOk = false;
            errorMsg = $el.data("msg");
            return false;
        });
        if (!isOk) {
            alert(errorMsg);
            return;
        } else {
            $form.data("isOk",true);
            $("#tc").show();
            // $form.submit();
        }
    });
})();

