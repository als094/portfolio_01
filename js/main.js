// $(document).ready(function () { 둘다 됨
$(function () {  // 문서 준비 이벤트(삭제X)



  // gnb
  /*   $(".depth2, .mdepth2, .mdepth3, .mgnb_wrap, .dim").hide();
  
    $("#gnb>li").mouseenter(function () {
      $(this).find(".depth2").stop().slideDown();
    });
    $("#gnb>li").mouseleave(function () {
      $(this).find(".depth2").stop().slideUp();
    }); */


  $(".depth3").hide();

  $(".depth2>li").mouseenter(function () {
    $(this).find(".depth3").stop().slideDown();
  });
  $(".depth2>li").mouseleave(function () {
    $(this).find(".depth3").stop().slideUp();
  });



  // mgnb
  $(".btn_ham").click(function () {
    $(".mgnb_wrap, .dim").fadeIn();
    $(".mgnb").animate({
      "right": "0"
    })
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap, .dim").fadeOut();
    $(".mgnb").animate({
      "right": "-100%"
    })
  });

  $(".mgnb > ul > li").click(function () {
    $(this).find(".mdepth2").slideDown();
    $(this).siblings().find(".mdepth2").slideUp();
  });

  $(".mgnb > ul > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });



  // main_visual


  const mv = new Swiper('.mv', {
    autoplay: {
      delay: 3000, //슬라이드 대기시간
      disableOnInteraction: false,
    },

    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });



  // main_container

  const main_container = new Swiper('.main_container', {

    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 5, // 한 줄에 보이는 슬라이드 갯수
    spaceBetween: 60, // 슬라이드 간의 간격 px

  });



  // schedule
  $('.schedule_list ul li').click(function () {
    let filter = $(this).find('a').attr('data-filter');

    $('.schedule_product .swiper-slide').css('display', 'none')
    $('.schedule_product .swiper-slide' + filter).css('display', '')
    $('.schedule_list ul li a').removeClass('active');
    $(this).find('a').addClass('active');

    schedule_product.updateSize();
    schedule_product.updateSlides();
    schedule_product.updateProgress();
    schedule_product.updateSlidesClasses();
    schedule_product.slideTo(0);

    return false;
  });


  const schedule_product = new Swiper('.schedule_product', {

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1, // 한 줄에 보이는 슬라이드 갯수
    breakpoints: {
      375: {
        slidesPerView: 1.1,
      },
      470: {
        slidesPerView: 1.5,
      },
      620: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
      1250: {
        slidesPerView: 3.5,
      },
      1320: {
        slidesPerView: 3.5,
        spaceBetween: 50, // 슬라이드 간의 간격 px
      },
      1600: {
        slidesPerView: 4,
      },


      observer: true,
    }

  });



  // notice

  $(".notice_list:not(:first-child)").hide();

  $(".notice_link li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let idx = $(this).index();
    $(".notice_list").eq(idx).fadeIn(500).siblings().fadeOut(0);
  });


  const event_box = new Swiper('.event_box', {
    autoplay: {
      delay: 3000, //슬라이드 대기시간
      disableOnInteraction: false,
    },

    speed: 1000,

    pagination: {
      el: ".swiper-pagination_ec",
      type: "bullets", // "bullets", "fraction", "progressbar" 슬라이드스타일
      clickable: true, // 클릭 가능 여부
    },

    slidesPerView: 1, // 한 줄에 보이는 슬라이드 갯수
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 10,

      },
      1201: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }


  });







}); // 문서준비이벤트 종류(삭제X)