var $htmlContainer = $("#html-container");
var url = $htmlContainer.data("url");
var pages = $htmlContainer.data("pages");
var isInit = false;
layui.use(['laypage', 'layer'], function () {
    var laypage = layui.laypage;
    var layer = layui.layer;
    laypage({
        cont: 'J-pagenation',
        pages: parseInt(pages) || 1,
        skin: '#f76d02',
        jump: function (obj) {
            if (!isInit) {
                isInit = true;
                return;
            }
            var curr = obj.curr || 1;
            // 请求数据
            $.ajax({
                url: url,
                type: "GET",
                dataType: "json",
                data: { curr : curr },
                success: function (data) {
                    data = data && data.data || {};
                    if (data.html) {
                        $htmlContainer.html(data.html);
                    }
                },
                error: function () {
                }
            })
        }
    });
});