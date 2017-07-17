import "css/reset.css";
import "css/basic.scss";
import "css/m-tout.scss";
import "./css/m-proboard.scss";

var $htmlContainerNew = $("#html-container-new");
var urlNew = $htmlContainerNew.data("url");
var pagesNew = $htmlContainerNew.data("pages");
var isInitNew = false;

var $htmlContainerPass = $("#html-container-pass");
var urlPass = $htmlContainerPass.data("url");
var pagesPass = $htmlContainerPass.data("pages");
var isInitPass = false;


layui.use(['laypage', 'layer'], function () {
    var laypage = layui.laypage;
    var layer = layui.layer;
    // 最新项目
    laypage({
        cont: 'J-pagenation-new',
        pages: parseInt(pagesNew) || 1,
        skin: '#f76d02',
        first: false,
        last: false,
        jump: function (obj) {
            if (!isInitNew) {
                isInitNew = true;
                return;
            }
            var curr = obj.curr || 1;
            // 请求数据
            $.ajax({
                url: urlNew,
                type: "GET",
                dataType: "json",
                data: { curr : curr },
                success: function (data) {
                    data = data && data.data || {};
                    if (data.html) {
                        $htmlContainerNew.html(data.html);
                    }
                },
                error: function () {
                }
            })
        }
    });
    // 往期项目
    laypage({
        cont: 'J-pagenation-pass',
        pages: parseInt(pagesPass) || 1,
        skin: '#f76d02',
        first: false,
        last: false,
        jump: function (obj) {
            if (!isInitPass) {
                isInitPass = true;
                return;
            }
            var curr = obj.curr || 1;
            // 请求数据
            $.ajax({
                url: urlPass,
                type: "GET",
                dataType: "json",
                data: { curr : curr },
                success: function (data) {
                    data = data && data.data || {};
                    if (data.html) {
                        $htmlContainerPass.html(data.html);
                    }
                },
                error: function () {
                }
            })
        }
    });
});

