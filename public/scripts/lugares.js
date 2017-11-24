function SelectCheck(nameSelect){
    console.log(nameSelect);
    if(nameSelect){
      OptionValue = document.getElementsByTagName("option").value;
      if(OptionValue == nameSelect.value){
        document.getElementById("Title").innerHTML = "Titulo prueba";
        document.getElementById("Informacion").innerHTML = "Información prueba";
      }
      else{
        document.getElementById("selectedCheck").style.display = "none";
      }
    }
    else{
      document.getElementById("selectedCheck").style.display = "none";
    }
}

function initMap() {
  var location = {lat: 19.417268, lng: -99.156820};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
  
