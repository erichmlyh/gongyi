import "css/reset.css";
import "css/w-common.scss";
import "css/w-trianglebg.scss";
import "css/w-banner.scss";

import "./css/w-rank.scss";


// var mockData = {
//     errno: 0,
//     errmsg: "",
//     data: [
//         {
//             school: "北京理工大学",
//             name: "张三",
//             time: "100",
//             score: "1000"
//         }
//     ]
// };
// for(var i=0;i<99;i++) {
//     mockData.data.push(
//         {
//             school: "北京理工大学",
//             name: "张三",
//             time: "100",
//             score: "1000"
//         }
//     );
// }
// var html = "";
// mockData.data.forEach(function(row){
//      html += '<tr class="body-row">'
//             + '<td class="rank"></td> '
//             + '<td>' + row.school + '</td> '
//             + '<td>' + row.name + '</td> '
//             + '<td>' + row.time + '</td> '
//             + '<td>' + row.score + '</td> '
//             + '</tr>';
// });
// $("tbody").html(html);

$(".each-rank").on("click", function(){
    var $this = $(this);
    var url = $this.data("url");
    var isPerson = !($this[0].className.indexOf("person") == -1),
        isWeek = !($this[0].className.indexOf("week") == -1);
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log("isPerson",isPerson)
            console.log("isWeek",isWeek)
            // 处理抬头
            var text = isWeek ? "周" : "&nbsp;&nbsp;&nbsp;";
            $("#week-or-not").html(text);

            if(isPerson) {
                $("#name").text("姓名")
            } else {
                $("#name").text("社团名称")
            }

            data = data && data.data || [];
            // data = mockData.data
            var html = "";
            data.forEach(function(row, idx){
                html += '<tr class="body-row">'
                        + '<td class="rank">' + ((idx>2)?idx+1:"") + '</td> '
                        + '<td>' + row.school + '</td> '
                        // + (isPerson ? ('<td>' + row.name + '</td> ') : "")
                        + '<td>' + row.name + '</td> '
                        + '<td>' + row.time + '</td> '
                        + '<td>' + row.score + '</td> '
                        + '</tr>';
            });
            $("tbody").html(html);

            $(".each-rank").removeClass("active");
            $this.addClass("active");
        },
        error: function() {
            alert(url + " is wrong");
        }
    })
})
