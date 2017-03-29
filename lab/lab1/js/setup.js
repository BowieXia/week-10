var map = L.map('map', {
  center: [42.35560000021253, -71.11200000020439],
  zoom: 14
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var hiden = false;
$('#Manu').click(function(){
  // $('.sidebar').toggle();
  hiden = !hiden;
  if(hiden) {
    $('#sidebar').animate({width:0});
    $('#map').animate({left:200});
  }else {
    $('#sidebar').animate({width:340});
    $('#map').animate({left:540});
  }
});
$('#Purc').click(function(){
  // $('.sidebar').toggle();
  hiden = !hiden;
  if(hiden) {
    $('#sidebar').animate({width:0});
    $('#map').animate({left:200});
  }else {
    $('#sidebar').animate({width:340});
    $('#map').animate({left:540});
  }
});
$('#Bask').click(function(){
  // $('.sidebar').toggle();
  hiden = !hiden;
  if(hiden) {
    $('#sidebar').animate({width:0});
    $('#map').animate({left:200});
  }else {
    $('#sidebar').animate({width:340});
    $('#map').animate({left:540});
  }
});
$('#Comm').click(function(){
  // $('.sidebar').toggle();
  hiden = !hiden;
  if(hiden) {
    $('#sidebar').animate({width:0});
    $('#map').animate({left:200});
  }else {
    $('#sidebar').animate({width:340});
    $('#map').animate({left:540});
  }
});

$("#Manufacturers").click(function () {
      // $("#container").append('<div class="demo-card-wide mdl-card mdl-shadow--2dp"><div class="mdl-card__title"><h2 class="mdl-card__title-text">Welcome</h2></div><div class="mdl-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Get Started</a></div><div class="mdl-card__menu"><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">share</i></button></div></div>');
});
