import "css/reset.css";
import "css/basic.scss";
import "css/m-form.scss";
import "css/m-table.scss";
import "css/m-tb.scss";


var $htmlContainer = $("#html-container");
var url = $htmlContainer.data("url");
$("#search").on("click", function() {
    var name = $("#name").val();
    var type = $("#type").val();
    if(!name) {
        layer.open({
            title: 'tips:',
            content: "请输入项目名称"
        }); 
        return;
    }
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        data: {
            name: name,
            type: type,
        },
        success: function (data) {
            data = data && data.data || {};
            if (data.html) {
                $htmlContainer.html( data.html);
            }
        },
        error: function () {
        }
    })
});

 
