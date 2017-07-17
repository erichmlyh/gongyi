module.exports = function (query) {
    var data = {
        html: 
            `<tr>
                <td>${query.name}</td>
                <td>北京交通大学${query.type}</td>
                <td>12小时</td>
                <td>250元</td>
            </tr>
            <tr>
                <td>${query.name}</td>
                <td>北京交通大学${query.type}</td>
                <td>12小时</td>
                <td>250元</td>
            </tr>
            <tr>
                <td>${query.name}</td>
                <td>北京交通大学${query.type}</td>
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


