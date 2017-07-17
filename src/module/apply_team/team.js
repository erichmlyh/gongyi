import "css/reset.css";
import "css/basic.scss";
import "css/m-container.scss";

import "./css/m-team.scss";
import "./css/m-figuer.scss";

var $upload = $("#upload");
var $uploadShow = $(".upload-show");
var url = $upload.data("url");
var fileUpload;
layui.use('upload', function () {
    fileUpload = function(){
        console.log("hi")
        layui.upload({
            url: url,
            elem: '#upload',
            success: function (res) { //上传成功后的回调
                console.log(res)
            },
            fail: function(res){
                console.log(res)
            }
        });
    }
});
fileUpload();

$upload.on("change", function (e) {

    var arr = $upload.val().split('\\');
    var fileName = arr[arr.length - 1];
    $uploadShow.text(fileName);
    fileUpload();
});