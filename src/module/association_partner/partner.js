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
chart.on('click', function (params) {
    var city = params.name;
    console.log(city);

    $.ajax({
        url: "../mock/partner.js",
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data);
        },
        error: function() {
            alert(url + " is wrong");
        }
    })
});
