import "css/reset.css";
import "css/basic.scss";
import "css/m-form.scss";
import "css/m-table.scss";
import "css/m-tb.scss";

var $htmlContainer = $("#html-container");
var url = $htmlContainer.data("url");
$("#search").on("click", function() {
    var name = $("#name").val();
    var type = $("#type").val();
    var date = $("#date").val();
    if(!name) {
        layer.open({
            title: 'tips:',
            content: "请输入项目名称"
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
                $htmlContainer.html( data.html);
            }
        },
        error: function () {
        }
    })
});

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