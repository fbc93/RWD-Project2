$(function(){  

  $(window).load(function(){
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      fitColumns: {
        gutter: 0
      }
      
    });
  });

  var  grid = $('.grid');

  // 초기설정
  grid.isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    fitColumns: {
      gutter: 0
    }
  });

  $('.grid-item a').lightBox({
    overlayBgColor: '#000',
    overlayOpacity: 0.5,
    imageLoading: '../images/lightbox-ico-loading.gif',
    imageBtnClose: '../images/lightbox-btn-close.gif',
    imageBtnPrev: '../images/lightbox-btn-prev.gif',
    imageBtnNext: '../images/lightbox-btn-next.gif'
   });


  // 필터링 버튼 설정
  $('#m1').click(function(e){
    grid.isotope({ filter: '.grid-item' });

    $('.grid-item a').lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.5,
      imageLoading: '../images/lightbox-ico-loading.gif',
      imageBtnClose: '../images/lightbox-btn-close.gif',
      imageBtnPrev: '../images/lightbox-btn-prev.gif',
      imageBtnNext: '../images/lightbox-btn-next.gif'
    });

    e.preventDefault();
  });

  $('#m2').click(function(e){
    grid.isotope({ filter: '.g1' });

    $('.g1 a').lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.5,
      imageLoading: '../images/lightbox-ico-loading.gif',
      imageBtnClose: '../images/lightbox-btn-close.gif',
      imageBtnPrev: '../images/lightbox-btn-prev.gif',
      imageBtnNext: '../images/lightbox-btn-next.gif'
     });

    e.preventDefault();
  });

  $('#m3').click(function(e){
    grid.isotope({ filter: '.g2' });

    $('.g2 a').lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.5,
      imageLoading: '../images/lightbox-ico-loading.gif',
      imageBtnClose: '../images/lightbox-btn-close.gif',
      imageBtnPrev: '../images/lightbox-btn-prev.gif',
      imageBtnNext: '../images/lightbox-btn-next.gif'
     });

    e.preventDefault();
  });

  $('#m4').click(function(e){
    grid.isotope({ filter: '.g3' });

    $('.g3 a').lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.5,
      imageLoading: '../images/lightbox-ico-loading.gif',
      imageBtnClose: '../images/lightbox-btn-close.gif',
      imageBtnPrev: '../images/lightbox-btn-prev.gif',
      imageBtnNext: '../images/lightbox-btn-next.gif'
     });

    e.preventDefault();
  });

  $('#m5').click(function(e){
    grid.isotope({ filter: '.g4' });

    $('.g4 a').lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.5,
      imageLoading: '../images/lightbox-ico-loading.gif',
      imageBtnClose: '../images/lightbox-btn-close.gif',
      imageBtnPrev: '../images/lightbox-btn-prev.gif',
      imageBtnNext: '../images/lightbox-btn-next.gif'
     });

    e.preventDefault();
  });



});