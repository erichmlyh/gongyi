import "css/reset.css";
import "css/basic.scss";
import "css/m-intro.scss";
import "css/m-news.scss";
import "css/m-picboard.scss";
import "./css/m-proboard.scss";
import "css/m-ads.scss";

import "./css/m-banner.scss";

var swiper = new Swiper('.swiper-container', {
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
