// 自行加入的JS請寫在這裡
$(function () {
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $('.cp_slider').slickLightbox({
    caption: 'caption',
    useHistoryApi: 'true',
    lazy: true,
  });
  //Imagebanner
  $('.Imagebanner').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    fade: true,
    cssEase: 'ease',
  });
  //bigpicture
  $('.bigbanner_slider').slick({
    dots: true,
    arrow: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    fade: true,
    cssEase: 'ease',
  });
  // 跑馬燈
  $('.marquee ul').slick({
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 300,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true, //滑鼠移過後暫停自動撥放
    focusOnSelect: true,
  });
  //大圖輪播更多
  $('.bigbannerbtn').hide();
  //推薦資訊-12
  $('.col-md-12 .recommend_link').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //推薦資訊-8
  $('.col-md-8 .recommend_link').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //推薦資訊-6
  $('.col-md-6 .recommend_link').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //推薦資訊-4
  $('.col-md-4 .recommend_link').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //活動剪影 單篇
  $('.activity_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  //活動剪影 兩篇
  $('.activity_slider2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //活動剪影 三篇
  $('.activity_slider3').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //圖文訊息輪播
  $('.message_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  //影片輪播
  $('.movie_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  //圖片輪播
  $('.photo_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  //圖片連結1-12
  $('.col-md-12 .adSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //圖片連結1-8
  $('.col-md-8 .adSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //圖片連結1-6
  $('.col-md-6 .adSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //圖片連結1-4
  $('.col-md-4 .adSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //圖片連結2- 12
  $('.col-md-12 .adSlider2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //圖片連結2- 8
  $('.col-md-8 .adSlider2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //圖片連結2- 6
  $('.col-md-6 .adSlider2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //圖片連結2- 4
  $('.col-md-4 .adSlider2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //
  /*-----------------------------------*/
  /////////// 無障礙快捷鍵盤組合  //////////
  /*-----------------------------------*/
  $(document).on('keydown', function (e) {
    // alt+S 查詢
    if (e.altKey && e.keyCode == 83) {
      $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
      $('.search').show();
      $('.m_search').hide();
      $('.search').find('input[type="text"]').focus();
    }
    // alt+U header
    if (e.altKey && e.keyCode == 85) {
      $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
      $('header').find('.accesskey').focus();
    }
    // alt+C 主要內容區
    if (e.altKey && e.keyCode == 67) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.main').find('.accesskey').offset().top - 70 }, 800, 'easeOutExpo');
      $('.main').find('.accesskey').focus();
    }
    // alt+B footer
    if (e.altKey && e.keyCode == 66) {
      $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('footer').find('.accesskey').offset().top }, 800, 'easeOutExpo');
      $('footer').find('.accesskey').focus();
    }

    if (e.key == 'Escape') {
      $('.search').slideUp();
    }
  });
  //
  $('.header .searchbtn').click(function () {
    $('.header .search').stop().slideToggle();
  });
});
//
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    //如果scrollTop >200時
    $('.back_page').stop(true, false).fadeIn(); //回頁首按鈕fadeIn
  } else {
    //反之
    $('.back_page').stop(true, false).fadeOut(); //回頁首按鈕fadeOut
  }
});
//font-size
$(document).ready(function () {
  $('#incfont').click(function () {
    curSize = parseInt($('#ContentPage').css('font-size')) + 2;
    if (curSize <= 20) $('#ContentPage').css('font-size', curSize);
  });
  $('#decfont').click(function () {
    curSize = parseInt($('#ContentPage').css('font-size')) - 2;
    if (curSize >= 12) $('#ContentPage').css('font-size', curSize);
  });
});
//大事記 event
$(function () {
  $('.eventblock .event .content').css('display', 'none');
  $('.eventblock .event .topic>a').click(function () {
    if ($(this).parent().next('.content').is(':hidden')) {
      $(this).parent('.topic').siblings('.content').slideUp();
      $(this).parent('.topic').siblings('.topic').children('a').removeClass('trunicon');
      $(this).parents('.event').siblings().children('.content').slideUp();
      $(this).parents('.event').siblings().children('.topic').children('a').removeClass('trunicon');
      $(this).parent('.topic').next('.content').slideDown();
      $(this).stop().addClass('trunicon');
    } else {
      $(this).parent('.topic').next('.content').slideUp();
      $(this).stop().removeClass('trunicon');
    }
  });
});
//條件查詢
$(function () {
  $('.condition_block').css('display', 'none');
  $('.condition').click(function () {
    $('.condition_block').slideToggle();
  });
});
//accordion_list
$(function () {
  $('.accordion_list .list_content').hide();
  $('.accordion_list .list_content .listTb3').hide();
  $('.accordion_list .list_content .tabSet').hide();
  // arrow_btn
  $('.accordion_list .list_block .arrow_btn>a').click(function () {
    if ($('.list_content :visible').length == 0) {
      $('.list_content').css('min-height', '300px');
      $('.list_content').stop(true, false).slideDown();
      $('.accordion_list .list_content .listTb3').fadeIn();
      $('.accordion_list .list_block .tablist>ul>li>a.dataname01').addClass('here');
      $('.accordion_list .list_block .tablist>ul>li>a.dataname02').removeClass('here');
      $(this).addClass('open');
      $('.list_content').show();
      $('.accordion_list .list_content .tabSet').hide();

      console.log('ok');
      $(this).parents('.accordion_list').siblings().children('.list_content').hide();
      $(this).parents('.accordion_list').siblings().find('.arrow_btn>a').removeClass('open');
      $(this).parents('.accordion_list').siblings().find('.tablist>ul>li>a.dataname01').removeClass('here');
      $(this).parents('.accordion_list').siblings().find('.tablist>ul>li>a.dataname02').removeClass('here');
    } else {
      $('.list_content').hide();
      $('.accordion_list .list_content .listTb3').hide();
      $('.accordion_list .list_block .tablist>ul>li>a').removeClass('here');
      $(this).removeClass('open');

      console.log('close');
    }
  });
  $('.accordion_list .list_block .tablist>ul>li').each(function () {
    var order = $(this).index(); //順序取出來
    // console.log(order);
    $(this)
      .children('a')
      .off()
      .click(function (e) {
        // console.log(order);
        $('.list_content').find('div').eq(order).show();
        $('.list_content').stop(true, false).slideDown();
        $('.list_content').show();
        // $('.list_content').addClass('show');
        $('.accordion_list .list_block .arrow_btn>a').addClass('open');
        $(this).parents('.accordion_list').siblings().children('.list_content').hide();
        $(this).parents('.accordion_list').siblings().find('.arrow_btn>a').removeClass('open');
        $(this).parents('.accordion_list').siblings().find('.tablist>ul>li>a').removeClass('here');
      });
  });
  $('.tablist ul li a.dataname02').click(function () {
    $(this).addClass('here');
    $('.tablist ul li a.dataname01').removeClass('here');
    $('.list_content .listTb3').hide();
    $('.list_content .tabSet').show();
  });
  $('.tablist ul li a.dataname01').click(function () {
    $(this).addClass('here');
    $('.tablist ul li a.dataname02').removeClass('here');
    $('.list_content .listTb3').show();
    $('.list_content .tabSet').hide();
  });
});
// 地圖選單
$(function () {
  $('.menulist>ul>li').mouseover(function () {
    $('.menulist>ul>li ul').stop().slideDown();
    $(this).parents('.menulist').siblings('.menulist').find('ul ul').hide();
  });
  $('.menulist>ul>li').mouseout(function () {
    $('.menulist>ul>li ul').stop().slideUp();
  });
});
// Search 無障礙
$(function () {
  $('.header .search')
    .find('a:last')
    .focusout(function () {
      $('.header .search').hide();
    });
});
// $(document).ready(function () {
//   $('[data-fancybox]').fancybox({
//     afterLoad: function (instance, current) {
//       current.$image.attr('alt', current.opts.$orig.find('img').attr('alt'));
//     },
//   });
// });
$(function () {
  // -----   fancyBox新增需要綁定才有效果
  if ($('[data-fancybox="gallery"]').length > 0) {
    Fancybox.bind('[data-fancybox="gallery"]', {
      l10n: Fancybox.l10n.zh_TW,
    });
  }
});
