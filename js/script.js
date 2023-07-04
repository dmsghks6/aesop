$(document).ready(function(){

  // 기본 틀 
  // $(window).scroll(function(){
  //     let scrollY = $(window).scrollTop();
  //     let bgSize = 100 + (scrollY/50); 
  //     "50"에 적힌 값을 적게 나눠줄수록 이미지 사이즈가 커짐 

  //     $('.main').css({
  //         backgroundSize : `${bgSize}%`
  //     });
  // });


  // 미디어 쿼리로 변형 하기 
  $(window).scroll(function() {
    let windowWidth = $(window).width();
    let scrollY = $(window).scrollTop();
  
    if (windowWidth >= 1200) {
      let bgSize = 100 + (scrollY / 50);
      $('.main').css({
        backgroundSize: `${bgSize}%`
      });
    } else {
      $('.main').css({
        backgroundSize: 'cover'
      });
    }
  });


  

  $(window).scroll(function(){
    const sct = $(window).scrollTop();

    const main = $('.main').offset().top;
    const sec1 = $('.sec-1').offset().top;
    const sec2 = $('.sec-2').offset().top;

    
if(sct >= main && sct < sec1 ){
    $('.main .logo svg').removeClass('on');
    $('.main .hamburger span').removeClass('active');
    
  }else if(sct >= sec1 && sct < sec2){
    $('.main .logo svg').addClass('on');
    $('.main .hamburger span').addClass('active');

  }else {
    $('.main .logo svg').removeClass('on');
    $('.main .hamburger span').removeClass('active');

  }
});



  
  $(window).resize(function() {
    let windowWidth = $(window).width();
  
    if (windowWidth >= 1200) {
      $('.main').css({
        backgroundSize: 'cover'
      });
    } else {
      $('.main').css({
        backgroundSize: 'cover'
      });
    }
  });
  

    // 햄버거 버튼 
  $('.hamburger').click(function(){
      $('.open-header').toggleClass('on')
      $('.hamburger span').toggleClass('on')
  });



    // sec-1 swiper

    let ww = $(window).width();
    let mySwiper = undefined;
    
    function initSwiper() {
    
      if (ww >= 1200 && mySwiper == undefined) {
         mySwiper = new Swiper(".firstSwiper", {
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          loop: true,
          autoplay: {
              delay: 3500,
              disableOnInteraction: false,
            },
            speed: 1500,
      });
      } else if (ww < 1200 && mySwiper != undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
      }
    }
    
    initSwiper();
    
    $(window).on('resize', function () {
      ww = $(window).width();
      initSwiper();
    });



  // sec-2 버튼 효과 

  let list = document.querySelectorAll('.item-box .btn .add-btn');
  list.forEach(link => {
    let letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach((letter, i) => {
      i += 1;
      let span = document.createElement('span');
      let delay = i/100;

      let letterOut = document.createElement("span");
      letterOut.textContent = letter;
      letterOut.style.transitionDelay = `${delay}s`;
      letterOut.classList.add('out');
      span.append(letterOut);

      

      let letterIn = document.createElement("span");
      letterIn.textContent = letter;
      letterIn.style.transitionDelay = `${delay}s`;
      letterIn.classList.add('in');
      span.append(letterIn);

      link.append(span);
    })

  });

    // sec-2 스크롤이벤트 

  $(window).scroll(function(){
      const sct = $(window).scrollTop();

      const box1 = $('.offset-box1').offset().top;
      const box2 = $('.offset-box2').offset().top;
      const box3 = $('.offset-box3').offset().top;
      const box4 = $('.offset-box4').offset().top;
      const box5 = $('.offset-box5').offset().top;

      
  if(sct >= box1 && sct < box2 ){
      $('.video-1').removeClass('on');
      $('.video-2').removeClass('on');
      
    }else if(sct >= box2 && sct < box3){
      $('.video-1').removeClass('on');
      $('.video-2').removeClass('on');

    }else if (sct >= box3 && sct < box4){
      $('.video-1').addClass('on');
      $('.video-2').addClass('on');

    }else if(sct >= box4 && sct < box5){
      $('.video-1').addClass('on');
      $('.video-2').addClass('on');
    }
  });

  

    // sec-3 swiper

  var swiper = new Swiper(".secondSwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      direction: "vertical",
      loop: true,
      autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        speed: 1500,
  });





});






