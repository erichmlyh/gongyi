import "css/reset.css";
import "css/basic.scss";
import "css/m-tb.scss";
import "css/m-forme.scss";

import "./css/m-date.scss";

import "js/pc_validate.js"

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

// 上传文件
var $uploadShow = $("#upload-show");
layui.upload({
  url: $uploadShow.data("url"),
  title: '上传图片',
  success: function(res){
    var data = res && res.data || {};
    $uploadShow.val(data.url);
  }
});
