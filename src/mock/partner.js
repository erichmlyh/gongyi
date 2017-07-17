module.exports = function (query) {
    var data = {
        html: 
            `<p class="tit">${query.city}</p>
            <div class="ifo">
                <span>社团</span>
                <span>学校</span>
            </div>
            <ul>
                <li class="itm">
                    <span>
                        <img src="/static/img/locd0bc7d515ba496ebb4a78ec5431f696b.png" alt="">
                        <span>北大志愿者社团</span>
                    </span>
                    <span>北京大学</span>
                </li>
                <li class="itm">
                    <span>
                        <img src="/static/img/locd0bc7d515ba496ebb4a78ec5431f696b.png" alt="">
                        <span>北大志愿者社团</span>
                    </span>
                    <span>北京大学</span>
                </li>
                <li class="itm">
                    <span>
                        <img src="/static/img/locd0bc7d515ba496ebb4a78ec5431f696b.png" alt="">
                        <span>北大志愿者社团</span>
                    </span>
                    <span>北京大学</span>
                </li>
                <li class="itm">
                    <span>
                        <img src="/static/img/locd0bc7d515ba496ebb4a78ec5431f696b.png" alt="">
                        <span>北大志愿者社团</span>
                    </span>
                    <span>北京大学</span>
                </li>
                <li class="itm">
                    <span>
                        <img src="/static/img/locd0bc7d515ba496ebb4a78ec5431f696b.png" alt="">
                        <span>北大志愿者社团</span>
                    </span>
                    <span>北京大学</span>
                </li>
            </ul>
            <div class="sum">
                <span>已有</span>
                <span class="num">231</span>
                <span>个社团加入</span>
            </div>
        </div>`
    };

    return {
        "errno": 0,
        "errmsg": "",
        "data": data
    }
}


