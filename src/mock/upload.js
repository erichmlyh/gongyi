module.exports = function (query) {
    console.log(query);
    var data = {
        name: "文件名.jpg",
        url: "http://www.baidu.com/xx.jpg"
    };

    return {
        "errno": 0,
        "errmsg": "",
        "data": data
    }
}


