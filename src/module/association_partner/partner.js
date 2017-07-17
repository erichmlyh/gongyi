import "css/reset.css";
import "css/basic.scss";
import "./css/m-map.scss";
import "./css/m-proboard.scss";
import "./css/m-corp.scss";

var chart = echarts.init(document.getElementById('j_map'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            // selectedMode : 'multiple',
            label: {
                normal: {
                    textStyle: {
                        fontSize: 16
                    },
                    show: true
                },
                emphasis: {
                    textStyle: {
                        fontSize: 16
                    },
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    borderWidth: .5,
                    areaColor:"#f76d02",
                }
            },
        }
    ]
};
chart.setOption(option);
var $htmlContainer = $("#html-container");
var url = $htmlContainer.data("url");
chart.on('click', function (params) {
    var city = params.name;

    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        data: {city: city},
        success: function(data){
            data = data && data.data || {};
            if (data.html) {
                $htmlContainer.html(data.html);
            }
        },
        error: function() {
        }
    })
});
