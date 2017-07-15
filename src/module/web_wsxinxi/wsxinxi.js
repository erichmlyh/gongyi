import "css/reset.css";
import "css/w-common.scss";
import "css/w-trianglebg.scss";
import "css/w-banner.scss";

import "./css/w-wsxinxi.scss";

import "common/js/validate.js"

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