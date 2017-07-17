import "css/reset.css";
import "css/basic.scss";
import "./css/m-group.scss";

import "js/pc_validate.js"

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

// 渲染省份
var provincesHtml = "";
$.each(citys, function(idx, province) {
    provincesHtml += '<option value="' + province.provinceName + '">'+ province.provinceName + '</option>'
});
$(".province").html(provincesHtml);

// 渲染城市
renderCity(0);

// 监听省份变化
$(".province").on("change", function() {
    var index = $(".province")[0].selectedIndex;
    renderCity(index);
});

function renderCity(index) {
    var citysHtml = "";
    $.each(citys[index].citys, function(idx, city) {
        citysHtml += '<option value="' + city.citysName + '">'+ city.citysName + '</option>'
    });
    $(".city").html(citysHtml);
}
