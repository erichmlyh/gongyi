import "css/reset.css";
import "css/basic.scss";
import "./css/m-group.scss";

layui.upload({
  url: '../mock/upload',
  title: '上传文件',
  success: function(res){
    var data = res && res.data || {};
    $("#upload-show").val(data.url);
  }
});
