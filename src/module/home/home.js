import "css/reset.css";
import "css/basic.scss";
import "css/m-intro.scss";
import "css/m-news.scss";
import "css/m-picboard.scss";
import "./css/m-proboard.scss";
import "./css/m-ads.scss";

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
new Swiper('.J-news', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true,
    // paginationBulletRender: function (swiper, index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    // }
});

// 合作企业，爱心媒体，爱心大使
[".J-hzqy", ".J-axmt", ".J-axds"].forEach(function(className){
    new Swiper(className, {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        // centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
    });
})

// 社团风采和优秀案例切换
$("#anli").hide();
$(".m-proboard").find(".tabs").on("click", ".tit", function(e){
    var $this = $(this);
    var me = $this.data("me");
    var all = $this.data("all");

    $(".m-proboard").find(".J-tit").removeClass("cur");
    $this.addClass("cur");
    $("." + all).hide();
    $("#" + me).show();
});

// 合作企业，爱心媒体，爱心大使切换
$(".J-axmt").hide();
$(".J-axds").hide();
$(".m-ads").find(".tabs").on("click", ".tit", function(e){
    var $this = $(this);
    var me = $this.data("me");
    var all = $this.data("all");

    $(".m-ads").find(".J-ads-tab").removeClass("cur");
    $this.addClass("cur");
    $("." + all).hide();
    $("." + me).show();
});

// header导航显示效果
// var fixed = false;
// window.onscroll = function() {
//      var height = document.documentElement.scrollTop || document.body.scrollTop; 
//      console.log("old height", height);
// 
//      if(height >= 110 && !fixed) {
//          $('#j-header').fadeOut('fast', function() {
//              $('#j-header-eff').fadeIn('fast', function() {
//                  document.body.scrollTop = height;
//                  fixed = true;
//              });
//          });
//      }
//      
//      if(height <= 110 && fixed == true){
//          $('#j-header').fadeIn('fast', function() {
//              $('#j-header-eff').fadeOut('fast', function() {
//                  document.body.scrollTop = height;
//                  fixed = false;
//              });
//          });
//      }
// }

