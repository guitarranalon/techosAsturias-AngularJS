var TechosModule = (function(){
"use strict";
	
	var info;

	var obtenerDificultadTextual = function(num){
		switch(num){
			case 1:return 'Fácil';
			case 2:return 'Media';
			case 3:return 'Difícil';
			default: return '-';
		}	
	};
	
	var marcaPuntosMapa = function(map){
		var myLatlng = null,
			image = 'img/pinMapa.png';
		
		var infowindow = new google.maps.InfoWindow();
		
		for (var i=0, max = info.length; i<max; i++){
			myLatlng = new google.maps.LatLng(info[i].latitud, info[i].longitud);
		
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon: image,
				title: info[i].pico + " (" + info[i].altura + "m)"
			});	

		   google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				  infowindow.setContent('<h2>' + info[i].pico + '(' + info[i].altura + 'm)</h2><p><b>Techo de:</b> ' + info[i].concejo + '</p><p><b>Dificultad:</b> ' + obtenerDificultadTextual(info[i].dificultad) + '</p><p><b>Coordenadas:</b> ' + info[i].latitud + ', ' + info[i].longitud + '</p>');
				  infowindow.open(map, marker);
				}
			  })(marker, i));
		}
	};
	
	return{	
		initializeMap: function() {
		  info = data;
		  var mapOptions = {
			scrollwheel: false,
			zoom: 9,
			center: new google.maps.LatLng(43.319183,-5.844727),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		  };

		  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		  marcaPuntosMapa(map);
		},

		loadMapScript: function () {
		  var script = document.createElement('script');
		  script.type = 'text/javascript';
		  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
			  'callback=TechosModule.initializeMap';
		  document.body.appendChild(script);
		}
	};
	
})();