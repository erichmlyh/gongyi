import "css/reset.css";
import "css/basic.scss";
import "css/m-container.scss";

import "./css/m-team.scss";
import "./css/m-figuer.scss";

import "js/dvalidate.js"


// 上传文件
var $uploadShow = $("#upload-show");
layui.upload({
  url: $uploadShow.data("url"),
  title: '上传文件',
  success: function(res){
    var data = res && res.data || {};
    $uploadShow.val(data.url);
  }
});
