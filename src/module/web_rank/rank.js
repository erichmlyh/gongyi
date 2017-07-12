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
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(data){
            data = data && data.data || [];
            // data = mockData.data
            var html = "";
            data.forEach(function(row){
                html += '<tr class="body-row">'
                        + '<td class="rank"></td> '
                        + '<td>' + row.school + '</td> '
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
