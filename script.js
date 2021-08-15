

var mymap = L.map('mapid').setView([13.0827, 80.2707], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJhbmF2YmFsYWtyaXNobmFuIiwiYSI6ImNrc2Q1Y2hhcDA1dHoyb251czZqNjJ5OXIifQ.GAwEOUtXWEtB58rzohGM4g', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHJhbmF2YmFsYWtyaXNobmFuIiwiYSI6ImNrc2Q1Y2hhcDA1dHoyb251czZqNjJ5OXIifQ.GAwEOUtXWEtB58rzohGM4g'
}).addTo(mymap);
alert("In case the website doesnt work,please try again but with you AdBlock disabled.");
document.getElementById("submit").addEventListener("click", function(){
  var ip = document.getElementById("ip").value;
  var api_key = "at_jf5ahyZziGKVfOwHb84eWrPL3I4Jc";
  $(function () {
     $.ajax({
         url: "https://geo.ipify.org/api/v1",
         data: {apiKey: api_key, ipAddress: ip},
         success: function(data) {
            document.getElementById("ip-address").innerHTML=data.ip;
            document.getElementById("location").innerHTML=data.location.city +","+data.location.region+","+data.location.country;
            document.getElementById("timezone").innerHTML="GMT"+data.location.timezone;
            document.getElementById("isp").innerHTML=data.isp;
            var lat=data.location.lat;
            var lng=data.location.lng;
            var marker = L.marker([lat, lng]).addTo(mymap);
            mymap.flyTo([lat, lng]);
            //$("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
         }
     });
  });
});
