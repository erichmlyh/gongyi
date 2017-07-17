import "css/reset.css";
import "css/basic.scss";
import "css/m-tb.scss";
import "css/m-forme.scss";

import "./css/m-basic.scss";

import "js/pc_validate.js"

// 修改与保存的切换
var $infoDisable = $("#info-disable");
var $infoEdit = $("#info-edit");
$infoEdit.hide();
$(".btn-edit").on("click", function(){
    $infoDisable.hide();
    $infoEdit.show();
});

// 渲染省份
var $province = $(".province");
var $city = $(".city");
var provincesHtml = "";
$.each(citys, function(idx, province) {
    provincesHtml += '<option value="' + province.provinceName + '">'+ province.provinceName + '</option>'
});
$province.html(provincesHtml);
$province.val($province.data("value"));

// 渲染城市
var index = $province[0].selectedIndex;
renderCity(index);
$city.val($city.data("value"));


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