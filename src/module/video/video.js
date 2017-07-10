import "css/reset.css";
import "css/basic.scss";
import "css/m-form.scss";
import "css/m-table.scss";
import "css/m-tb.scss";

import "./css/m-video.scss";

// 优酷播放器
var id = "player";
var options = {
    styleid: '0',
    client_id: '7754ce1f03516a6b',
    vid: 'XMjg3MzI1MTUzNg=='
};
var player = new YKU.Player(id, options);

// swiper
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
    // centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 20,
});
