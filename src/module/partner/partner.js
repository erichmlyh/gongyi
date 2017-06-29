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
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
        }
    ]
};
chart.setOption(option);
chart.on('click', function (params) {
    var city = params.name;
    console.log(city);
});
