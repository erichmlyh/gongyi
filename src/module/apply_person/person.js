import "css/reset.css";
import "css/basic.scss";
import "css/m-container.scss";

import "./css/m-person.scss";
import "./css/m-figuer.scss";

import "./js/validate.js"

// 上传文件
var $uploadShow = $("#upload-show");
layui.upload({
    url: $uploadShow.data("url"),
    title: '上传文件',
    success: function (res) {
        var data = res && res.data || {};
        $uploadShow.val(data.url);
    }
});

//添加成员
var $add = $("#add");
var memberHtml = '';
var num = 1;
$add.on("click", function(){
    memberHtml = '<div class="fill"><p class="name">学校:</p><input class="ipt" type="text" name="xx' + num + '"></div>'
               + '<div class="fill"><p class="name">年级:</p><input class="ipt" type="text" name="lj' + num + '"></div>'
               + '<div class="fill"><p class="name">专业:</p><input class="ipt" type="text" name="zy' + num + '"></div>'
               + '<div class="fill"><p class="name">手机:</p><input class="ipt" type="text" name="sj' + num + '"></div>'
               + '<div class="fill"><p class="name">邮箱:</p><input class="ipt" type="text" name="yx' + num + '"></div>'
    $add.before(memberHtml); 
    num++;
    if (num == 10) {
        $add.hide();
    }
});