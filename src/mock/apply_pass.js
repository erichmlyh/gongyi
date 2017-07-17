module.exports = function (query) {
    var data = {
        html: 
            `<li class="itm">
                    <img src="/static/img/baleib935952cf401361e17ec70808e079d28.jpg" alt="">
                    <div class="ifo">
                        <p class="tit">往期项目${query.curr}</p>
                        <p class="time">2017-5-1</p>
                        <p class="dtl">这个计划伊始就是为了能让更多小朋友学上芭蕾，让他们的梦想能得以实现……</p>
                        <a href="/xxx/xxx" class="btn">了解项目</a>
                    </div>
                </li>
                 <li class="itm">
                    <img src="/static/img/baleib935952cf401361e17ec70808e079d28.jpg" alt="">
                    <div class="ifo">
                        <p class="tit">往期项目${query.curr}</p>
                        <p class="time">2017-5-1</p>
                        <p class="dtl">这个计划伊始就是为了能让更多小朋友学上芭蕾，让他们的梦想能得以实现……</p>
                        <a href="/xxx/xxx" class="btn">了解项目</a>
                    </div>
                </li>
                <li class="itm">
                    <img src="/static/img/baleib935952cf401361e17ec70808e079d28.jpg" alt="">
                    <div class="ifo">
                        <p class="tit">往期项目${query.curr}</p>
                        <p class="time">2017-5-1</p>
                        <p class="dtl">这个计划伊始就是为了能让更多小朋友学上芭蕾，让他们的梦想能得以实现……</p>
                        <a href="/xxx/xxx" class="btn">了解项目</a>
                    </div>
                </li>
                <li class="itm">
                    <img src="/static/img/baleib935952cf401361e17ec70808e079d28.jpg" alt="">
                    <div class="ifo">
                        <p class="tit">往期项目${query.curr}</p>
                        <p class="time">2017-5-1</p>
                        <p class="dtl">这个计划伊始就是为了能让更多小朋友学上芭蕾，让他们的梦想能得以实现……</p>
                        <a href="/xxx/xxx" class="btn">了解项目</a>
                    </div>
                </li>`
    };

    return {
        "errno": 0,
        "errmsg": "",
        "data": data
    }
}


