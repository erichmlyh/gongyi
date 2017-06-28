import "css/reset.css";
import "css/basic.scss";
import "./css/m-map.scss";
import "./css/m-proboard.scss";

var myChart = echarts.init(document.getElementById('j_map'));

// 指定图表的配置项和数据
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
            selectedMode : 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name:'广东', selected:true}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
