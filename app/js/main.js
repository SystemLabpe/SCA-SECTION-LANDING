"use strict";

var video1 = null, video2 = null, video3 = null,
    video4 = null, video5 = null, video6 = null;

var defaultVideoOptions = {
  controls:false,
  autoplay:false,
  preload:'auto',
  muted:true
};

function setAnimation(element,animation) {
  element.removeClass().addClass(animation + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    element.removeClass();
    element.removeAttr('style');
  });
}

jQuery(document).ready(function($){

});

jQuery(window).load(function(){
  var scaSlider = $('.sca-slider').bxSlider({
    auto: false,
    pager: false,
    controls: true
  });

  video1 = videojs('v_prueba_1',defaultVideoOptions, function() {});

  video2 = videojs('v_prueba_2', defaultVideoOptions, function() {});

  video3 = videojs('v_prueba_3',defaultVideoOptions, function() {});

  video4 = videojs('v_prueba_4', defaultVideoOptions, function() {});

  video5 = videojs(document.getElementsByClassName('bx-video-5')[1],defaultVideoOptions, function() {});

  video6 = videojs(document.getElementsByClassName('bx-video-6')[1], defaultVideoOptions, function() {});

  video1.on('ended', function() {
    setAnimation($('#video2'),'animated shake');
    video2.play();
  });

  video2.on('ended', function() {
    scaSlider.goToSlide(1);
    video3.play();
  });

  video3.on('ended', function() {
    setAnimation($('#video4'),'animated shake');
    video4.play();
  });

  video4.on('ended', function() {
    scaSlider.goToSlide(2);
    video5.play();
  });

  video5.on('ended', function() {
    video6.play();
  });

  video6.on('ended', function() {
    scaSlider.goToSlide(0);
    video1.play();
  });

  video1.play();
});
