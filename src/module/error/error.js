import "css/reset.css";
import "css/basic.scss";

import "./css/m-error.scss";

layer.open({
    type: 1
    , title: false //不显示标题栏
    , closeBtn: false
    , area: '300px;'
    , shade: 0.8
    , id: 'LAY_layuipro' //设定一个id，防止重复弹出
    , btn: $("body").data("btn")
    , moveType: 1 //拖拽模式，0或者1
    , content: $("#text").html()
    , success: function (layero) {
        var btn = layero.find('.layui-layer-btn');
        btn.css('text-align', 'center');
        btn.find('.layui-layer-btn0').on("click", function(){
            history.go(-1);
        });
        // btn.find('.layui-layer-btn0').attr({
        //     href: 'http://www.layui.com/'
        //     , target: '_blank'
        // });
    }
});