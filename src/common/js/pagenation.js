var $htmlContainer = $("#html-container");
var url = $htmlContainer.data("url");
var pages = $htmlContainer.data("pages");

layui.use(['laypage', 'layer'], function () {
    var laypage = layui.laypage;
    var layer = layui.layer;
    laypage({
        cont: 'J-pagenation',
        pages: parseInt(pages) || 1,
        skin: '#f76d02',
        jump: function (obj) {
            var curPage = obj.curr || 1;
            // 请求数据
            $.ajax({
                url: url,
                type: "GET",
                dataType: "json",
                data: { curr : curPage },
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