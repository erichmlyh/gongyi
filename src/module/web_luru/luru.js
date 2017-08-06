import "css/reset.css";
import "css/w-common.scss";
import "css/w-trianglebg.scss";
import "css/w-banner.scss";

import "./css/w-luru.scss";


import "common/js/validate.js"

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