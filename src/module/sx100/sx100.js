import "css/reset.css";
import "css/basic.scss";
import "css/m-tout.scss";

import "./css/m-container.scss";
import "./css/m-intro.scss";
import "./css/m-fads.scss";
import "./css/m-score.scss";
import "./css/m-ques.scss";
import "./css/m-shetuan.scss";
import "./css/m-tabs.scss";

// 个人成绩
$("#J-person-all").hide();
$(".m-tabs").find(".tabs").on("click", ".J-tit-person", function(e){
    var $this = $(this);
    var me = $this.data("me");
    var all = $this.data("all");

    $(".m-tabs").find(".J-tit-person").removeClass("cur");
    $this.addClass("cur");
    $("." + all).hide();
    $("#" + me).show();
});

// 社团成绩
$("#J-recruit-all").hide();
$(".m-tabs").find(".tabs").on("click", ".J-tit-recruit", function(e){
    var $this = $(this);
    var me = $this.data("me");
    var all = $this.data("all");

    $(".m-tabs").find(".J-tit-recruit").removeClass("cur");
    $this.addClass("cur");
    $("." + all).hide();
    $("#" + me).show();
});
