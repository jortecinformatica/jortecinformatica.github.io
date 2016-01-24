$(document).ready(function(){

  google.maps.event.addDomListener(window, 'load', initialize);

  $(".ticket").hover(
      function() { $(this).children(".buy-now").html("Get yours now")},
      function() { var buy = $(this).children(".buy-now"); buy.html(buy.attr("data-text"))}
  )

});

  function initialize(){
  var location = new google.maps.LatLng(38.660691, -9.20267);
  var map_canvas = document.getElementById('map_canvas');

  $("#map_canvas").height($("#location").outerHeight());

  var map_options = {
          //38° 39.611', -9° 12.196'
          scrollwheel: false,
          center: location,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options);
        
        new google.maps.Marker({
          position: location,
          map: map
        });
}

