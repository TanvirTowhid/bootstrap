//Gallery Slideshow JS
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//Google-map JS
var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        lat: 23.8103,
        lng: 90.4125,
        scrollwheel: false
      });
      //locations request
      map.getElevations({
        locations : [[-12.040397656836609,-77.03373871559225], [-12.050047116528843,-77.02448169303511],  [-12.044804866577001,-77.02154422636042]],
          callback : function (result, status){
          if (status == google.maps.ElevationStatus.OK) {
            for (var i in result){
             map.addMarker({
              lat: result[i].location.lat(),
              lng: result[i].location.lng(),
              title: 'Marker with InfoWindow',
              infoWindow: {
                content: '<p>The elevation is '+result[i].elevation+' in meters</p>'
              }
            });
           }
          }
        }
      });    
    });
