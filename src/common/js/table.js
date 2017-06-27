module.exports = function(option) {
    let opt = Object.assign({
        method: "post",
        timeout: 5000,
        cache: false,
        data: {},
        pagenation: false,      //是否分页
        showPagenation: false,  //是否展示分野
        pageSize: 30,           //每页展示数据条数
        pageIndex: 1,           //当前数据为第几页
        cols: [
            // {
            //     title: "title",
            //     index: "name",
            //     width: 50,
            //     show: function(cur, obj) {
            //         return "<div>" + cur + "</div>"
            //     }
            // }
        ]
    }, option);

    let $table = $("#j_table");

    let fdone = function() {
        $table.append();
    }



    $.ajax({
        url: opt.url,
        method: opt.method,
        cache: opt.cache,
        data: opt.data
    }).done(fdone).fail(ffail);
}

//生成表格框架和表头
function generateHead(cols) {
    let h = cols.map(function(cur, index, arr) {
        return "<th>" + cur + "</td>";
    });

    return ["<tr>", h, "</tr>"].join();
}

//生成表格主体内容
function generateBody(data, cols) {
    
}