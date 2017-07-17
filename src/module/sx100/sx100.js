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
$(".m-tabs").find(".tabs").on("click", ".J-tit-person", function (e) {
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
$(".m-tabs").find(".tabs").on("click", ".J-tit-recruit", function (e) {
    var $this = $(this);
    var me = $this.data("me");
    var all = $this.data("all");

    $(".m-tabs").find(".J-tit-recruit").removeClass("cur");
    $this.addClass("cur");
    $("." + all).hide();
    $("#" + me).show();
});

// 成绩查询
// 日历框
layui.use('laydate', function () {
    var laydate = layui.laydate;

    var start = {
        min: laydate.now()
        , max: '2099-06-16 23:59:59'
        , istoday: false
        , choose: function (datas) {
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };

    var end = {
        min: laydate.now()
        , max: '2099-06-16 23:59:59'
        , istoday: false
        , choose: function (datas) {
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
});

var $htmlContainer = $("#html-container");
var url = $htmlContainer.data("url");

$("#to-search").on("click", function (e) {
    var $form = $("#form");
    var name = $form.find(".J-name").val();
    var type = $form.find(".J-type").val();
    var date = $form.find(".J-date").val();
    if(!name || !date) {
        var text = !name ? "请输入姓名或团队" : "请输入日期";
        layer.open({
            type: 1,
            offset: type,
            id: 'LAY_demo' + type,
            content: '<div style="padding: 20px 100px;">' + text + '</div>',
            btn: '关闭',
            btnAlign: 'c',
            shade: 0.4,
            yes: function () {
                layer.closeAll();
            }
        });
        return;
    }
    
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        data: {
            name: name,
            type: type,
            date: date
        },
        success: function (data) {
            data = data && data.data || {};
            if (data.html) {
                $htmlContainer.html("<tr><th>名称</th><th>学校</th><th>总服务时长</th><th>捐赠金额</th></tr>" + data.html);
            }
        },
        error: function () {
        }
    });

});

