
var lt = 0;
var lng = 0;

function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  lt = position.coords.latitude;
  lng = position.coords.longitude;
//  alert ( lt +" " + lng);
  }

window.onload= getLocation();
