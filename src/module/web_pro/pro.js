import "css/reset.css";
import "css/w-common.scss";
import "css/w-trianglebg.scss";
import "css/w-banner.scss";

import "./css/w-pro.scss";

$(".tab").on("click", function(){
    var type = $(this).data("hide");
    $(".tab").removeClass("active");
    $(this).addClass("active");

    $(".intro").removeClass("hide");
    $("." + type).addClass("hide");
});