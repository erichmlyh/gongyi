import "css/reset.css";
import "css/basic.scss";
import "./css/m-group.scss";

layui.upload({
  url: '/xxx/xx',
  success: function(res){
    console.log(res); //上传成功返回值，必须为json格式
  }
});
