module.exports = function(opt, done, fail) {
    let option = Object.assign(
        {
            method: 'post',
            cache: false,
            timeout: 50000
        },
        opt
    );

    let fnFail = fail || function() {
        alert("操作失败，请稍后再试")
    };

    let fnDone = done || function(json) {
        if(json && json.ret) {
            alert("操作成功");
        }else {
            fnFail();
        }
    };

    $.ajax(opt).done(fnDone).fail(fnFail);
} 