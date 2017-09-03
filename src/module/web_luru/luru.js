import "css/reset.css";
import "css/w-common.scss";
import "css/w-trianglebg.scss";
import "css/w-banner.scss";

import "./css/w-luru.scss";


import "common/js/validate.js"

$(".nums").on("change", function(e){
  var val = 0;
  var meishuVal = $(".meishu").val();
  var wennuanVal = $(".wennuan").val();
  // 检查美术包是否是0.5的整数倍
  if ($(this).hasClass("meishu") && !/^\d*(\.(5|0))?$/.test(meishuVal)) {
    $(".meishu").val("")
    alert("请输入0或者0.5的整数倍");
    return;
  }
  // 检查温暖包是否是0.5的整数倍
  if ($(this).hasClass("wennuan") && !/^\d*(\.(5|0))?$/.test(wennuanVal)) {
    $(".wennuan").val("")
    alert("请输入0或者0.5的整数倍");
    return;
  }
  val = parseInt(100 * meishuVal) + parseInt(200 * wennuanVal);
  $(".total-cash").val(val||0);
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