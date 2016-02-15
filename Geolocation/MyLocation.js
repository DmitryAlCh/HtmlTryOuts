window.onload=getMyLocation;//assign a function to event

function getMyLocation(){
	console.log("location  requsted");
	if (navigator.geolocation){
		console.log("geolocation active");
		navigator.geolocation.getCurrentPosition(displayLocation);
		navigator.geolocation.getCurrentPosition(displayLocation);
	}else{
		alert("No geolocation support");
	}
}
function displayLocation(position){
	console.log("display function called");
	var latitude=position.coords.latitude;
	var longitude=position.coords.longitude;
	var div=document.getElementById("location");
	console.log(div);
	div.innerHTML="you are at Latitude "+latitute+",Longitude: "+longitude;
}
