$(function(){

//Intro 영역 : Covervid JS
$('.covervid-video').coverVid(1200, 714);


//PLUG-IN : Jarallax JS
$('.jarallax').jarallax({});

//Bootstrap JS : 스크롤 스파이
$('body').scrollspy({
  target: '#navi',
  offset: 64
})

//g-menu JS
var gmenuItem = $('.g-menu li a');

gmenuItem.click(function(e){
  gmenuItem.removeClass('gmenu-act');
  $(this).addClass('gmenu-act');

e.preventDefault();
});


//Scroll Magic Area Start

//1. 컨트롤러 생성
var controller = new ScrollMagic.Controller();

//2. 사용할 변수
var c1 = $('.circle1');
var c2 = $('.circle2');
var c3 = $('.circle3');
var c4 = $('.circle4');

var t1 = $('#team .content>div:nth-child(1)');
var t2 = $('#team .content>div:nth-child(2)');
var t3 = $('#team .content>div:nth-child(3)');
var t4 = $('#team .content>div:nth-child(4)');

var introTitle = $('#intro .text-box');

var about = $('#about');

var service = $('#service');


//3. 타임라인
var skillCircleT = new TimelineMax();
var introT = new TimelineMax();
var introT2 = new TimelineMax();
var aboutT = new TimelineMax();
var teamT = new TimelineMax();
var serviceT = new TimelineMax();



//4. GSAP : 타임라인 동안 동작할 애니메이션 
teamT.from(t1, 1, {
  y: 100,
  opacity:0
}).from(t2, 1, {
  y: 100,
  opacity:0
}).from(t3, 1, {
  y: 100,
  opacity:0
}).from(t4, 1, {
  y: 100,
  opacity:0
});






skillCircleT.from(c1, 1, {
  y: 30,
  opacity: 0
})
.from(c2, 1, {
  y: 30,
  opacity: 0
}).from(c3, 1, {
  y: 30,
  opacity: 0
}).from(c4, 1, {
  y: 30,
  opacity: 0
});


//인트로
introT.to(introTitle, 1.5, {

  opacity:1
});

introT2.to(introTitle, 1.5, {
  
  opacity:0
});

aboutT.from(about, 1.8, {
  opacity:0
});

serviceT.from(service, 1.8, {
  opacity:0
});







//5. 장면설정
var teamScene = new ScrollMagic.Scene({

  triggerElement: '#team',
  triggerHook: 0.5

}).setTween(teamT).addTo(controller);



var aboutScene = new ScrollMagic.Scene({

  triggerElement: '#about',
  triggerHook: 0.5

}).setTween(aboutT).addTo(controller);

var servicetScene = new ScrollMagic.Scene({

  triggerElement: '#service',
  triggerHook: 0.5

}).setTween(serviceT).addTo(controller);


var introScene = new ScrollMagic.Scene({

  triggerElement: '#intro',
  riggerHook: 0.5

}).setTween(introT).addTo(controller);

var introScene2 = new ScrollMagic.Scene({

  triggerElement: '#about',
  triggerHook: 0.5

}).setTween(introT2).addTo(controller);



var progressScene = new ScrollMagic.Scene({

  triggerElement: '#skill',
  triggerHook: 0.5

}).setTween(skillCircleT).addTo(controller).on('start end', function(){


  c1.circleProgress({
    value : 0.87,
    size : 210,
    fill : {
      color: "#6dca40"
    },
    emptyFill: "rgba(204,204,204)",
    animation: {
      duration: 3500, easing: "circleProgressEasing"
    }
    
  }).on('circle-animation-progress', 
  //그래프 애니메이션이 진행되는 동안 
  function(event, progress, stepValue) {
  //progress -현재 진행상탱 0.0~1.0
  //stepValue - 현재까지 그려진 그래프 값 
  $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");
  });
  
  //CSS3
  c2.circleProgress({
    value : 0.85,
    size : 210,
    fill : {
      color: "#ffcc00"
    },
    emptyFill: "rgba(204,204,204)",
    animation: {
      duration: 3000, easing: "circleProgressEasing"
    }
  }).on('circle-animation-progress', 
  //그래프 애니메이션이 진행되는 동안 
  function(event, progress, stepValue) {
  //progress -현재 진행상탱 0.0~1.0
  //stepValue - 현재까지 그려진 그래프 값 
  $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");
  });
  
  //JAVASCRIPT
  c3.circleProgress({
    value : 0.75,
    size : 210,
    fill : {
      color: "#21b3d8"
    },
    emptyFill: "rgba(204,204,204)",
    animation: {
      duration: 3500, easing: "circleProgressEasing"
    }
  }).on('circle-animation-progress', 
  //그래프 애니메이션이 진행되는 동안 
  function(event, progress, stepValue) {
  //progress -현재 진행상탱 0.0~1.0
  //stepValue - 현재까지 그려진 그래프 값 
  $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");
  });
  
  //JQUERY
  c4.circleProgress({
    value : 0.8,
    size : 210,
    fill : {
      color: "#f5444f"
    },
    emptyFill: "rgba(204,204,204)",
    animation: {
      duration: 4000, easing: "circleProgressEasing"
    }
  }).on('circle-animation-progress', 
  //그래프 애니메이션이 진행되는 동안 
  function(event, progress, stepValue) {
  //progress -현재 진행상탱 0.0~1.0
  //stepValue - 현재까지 그려진 그래프 값 
  $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");
  });
  





});//Circle Progress End




//스크롤매직 JS



//상단 네비게이션 스크롤이동 설정
  var menuItem = $('#gnb li a, #navi h1 a');

  menuItem.click(function(e){
    var el = $(this).attr('href');  // #about
    // console.log(el);  
    var elWrap = $(el); 
    // console.log(elWrap);               

    scrollMove(elWrap, 63);
    e.preventDefault();
  });

  // 부드러운 이동 함수만들기
  function scrollMove(el, navHeight){
    var offset = el.offset().top;
    var totalScroll = offset - navHeight;

    $('html, body').animate({scrollTop: totalScroll}, 800);
  }

});//jquery End