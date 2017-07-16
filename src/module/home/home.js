import "css/reset.css";
import "css/basic.scss";
import "css/m-intro.scss";
import "css/m-news.scss";
import "css/m-picboard.scss";
import "./css/m-proboard.scss";
import "css/m-ads.scss";

import "./css/m-banner.scss";

// 头图轮播
new Swiper('.J-banner', {
    // pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true
});

// 新闻轮播
new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true,
    // paginationBulletRender: function (swiper, index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    // }
});
