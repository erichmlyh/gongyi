module.exports = function (query) {
    var data = {
        html: 
            `<tr>
                <td>爱心一帮一${query.curr}</td>
                <td>北京交通大学</td>
                <td>12小时</td>
                <td>250元</td>
            </tr>
            <tr>
                <td>爱心一帮一${query.curr}</td>
                <td>北京交通大学</td>
                <td>12小时</td>
                <td>250元</td>
            </tr>
            <tr>
                <td>爱心一帮一${query.curr}</td>
                <td>北京交通大学</td>
                <td>12小时</td>
                <td>250元</td>
            </tr>`
    };

    return {
        "errno": 0,
        "errmsg": "",
        "data": data
    }
}


