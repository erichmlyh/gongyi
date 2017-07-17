module.exports = function (query) {
    var data = {
        html: 
            `<tr>
                <td>${query.name}</td>
                <td>北京交通大学</td>
                <td>1244小时</td>
                <td>2568元</td>
            </tr>`
    };

    return {
        "errno": 0,
        "errmsg": "",
        "data": data
    }
}


