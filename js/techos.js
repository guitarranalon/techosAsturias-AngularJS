var removeClass= function(el, className){
	if (el.classList)
	  el.classList.remove(className);
	else
	  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

var data = [
		{ concejo:"Allande", pico:"Pico Panchón", altura:1411, dificultad: 1, latitud:43.269427, longitud:-6.660072, ascendido: false}
		,
		{ concejo:"Aller", pico:"Estorbín de Valverde", altura:2115, dificultad: 2, latitud:43.0443583, longitud:-5.6504222, ascendido: false}
		,
		{ concejo:"Amieva", pico:"Torre de Enmedio", altura:2465, dificultad:3, latitud:43.2085805, longitud:-4.97495, ascendido: false}
		,
		{ concejo:"Avilés", pico:"El Vallín", altura:131, dificultad:1, latitud:43.5362083, longitud:-5.9335194, ascendido: false, alternativas:[
		{pico:"Miranda", altura:143, dificultad:1, latitud:43.5375194, longitud:-5.944175, ascendido: false}
		]}
		,
		{ concejo:"Belmonte de Miranda", pico:"Picu Horru", altura:1527, dificultad:2, latitud:43.2358305, longitud:-6.3054305, ascendido: false}
		,
		{ concejo:"Bimenes", pico:"Peña Mayor", altura:1144, dificultad:1, latitud:43.3102583 , longitud:-5.5138555, ascendido: false}
		,
		{ concejo:"Boal", pico:"Prado Roque", altura:1104, dificultad:1, latitud:43.3503166, longitud:-6.7763166, ascendido: false}
		,
		{ concejo:"Cabrales", pico:"Torrecerredo", altura:2648, dificultad:3, latitud:43.197775, longitud:-4.8528388, ascendido: false}
		,
		{ concejo:"Cabranes", pico:"Monte Incós", altura:581, dificultad:1, latitud:43.3913777, longitud:-5.3847638, ascendido: false}
		,
		{ concejo:"Candamo", pico:"Pico Pedroso", altura:614, dificultad:1, latitud:43.4356249, longitud:-6.0203916, ascendido: false}
		,
		{ concejo:"Cangas de Onís", pico:"Torre Santa de Enol", altura:2478, dificultad:3, latitud:43.2124333, longitud:-4.9745138, ascendido: false}
		,
		{ concejo:"Cangas del Narcea", pico:"Cueto Arbás", altura:2007, dificultad:2, latitud:42.9930194, longitud:-6.4369805, ascendido: false}
		,
		{ concejo:"Caravia", pico:"Piedra Redonda", altura:631, dificultad:1, latitud:43.4391583, longitud:-5.1947555, ascendido: false}
		,
		{ concejo:"Carreño", pico:"Monte Areo", altura:264, dificultad:1, latitud:43.5278555, longitud:-5.7792638, ascendido: false}
		,
		{ concejo:"Caso", pico:"Pico Torres", altura:2104, dificultad:3, latitud:43.0783222, longitud:-5.4085444, ascendido: false}
		,
		{ concejo:"Castrillón", pico:"Prado del Marqués", altura:431, dificultad:1, latitud:43.5127888, longitud:-6.0201138, ascendido: false}
		,
		{ concejo:"Castropol", pico:"Peña el Filso", altura:1201, dificultad:1, latitud:43.3781333, longitud:-6.9464277, ascendido: false}
		,
		{ concejo:"Coaña", pico:"Pico Fonteblanca", altura:741, dificultad:1, latitud:43.4654916, longitud:-6.7802083, ascendido: false}
		,
		{ concejo:"Colunga", pico:"Pico Pienzu", altura:1159, dificultad:1, latitud:43.4318611, longitud:-5.2422305, ascendido: false}
		,
		{ concejo:"Corvera", pico:"Pico Prieto", altura:366, dificultad:1, latitud:43.5016111, longitud:-5.8957583, ascendido: false}
		,
		{ concejo:"Cudillero", pico:"Pico Cueto", altura:778, dificultad:1, latitud:43.5069972, longitud:-6.2652583, ascendido: false}
		,
		{ concejo:"Degaña", pico:"Alcornón de Busmori", altura:1934, dificultad:2, latitud:42.9129944, longitud:-6.5428138, ascendido: false}
		,
		{ concejo:"El Franco", pico:"Pico la Penouta", altura:899, dificultad:1, latitud:43.4555472, longitud:-6.8226333, ascendido: false}
		,
		{ concejo:"Gijón", pico:"Peña de los Cuatro Jueces", altura:662, dificultad:1, latitud:43.4426444, longitud:-5.5843166, ascendido: false}
		,
		{ concejo:"Gozón", pico:"Tabladas", altura:138, dificultad:1, latitud:43.5762777, longitud:-5.8833777, ascendido: false}
		,
		{ concejo:"Grado", pico:"Pico la Berza", altura:1454, dificultad:1, latitud:43.1833305, longitud:-6.2005111, ascendido: false}
		,
		{ concejo:"Grandas de Salime", pico:"Piedras Apañadas", altura:1201, dificultad:1, latitud:43.1394583, longitud:-6.9571194, ascendido: false}
		,
		{ concejo:"Ibias", pico:"Peña Roguera o Torrunteira", altura:1961, dificultad:2, latitud:42.9166055, longitud:-6.7050361, ascendido: false}
		,
		{ concejo:"Illano", pico:"Pico Gargalois", altura:1167, dificultad:2, latitud:43.3405527, longitud:-6.7816805, ascendido: false}
		,
		{ concejo:"Illas", pico:"Pico Friera o Bufarán", altura:619, dificultad:1, latitud:43.4913666, longitud:-5.9426555, ascendido: false}
		,
		{ concejo:"Langreo", pico:"Pico San Justo o Cogollu", altura:1021, dificultad:1, latitud:43.2312694, longitud:-5.6899833, ascendido: false}
		,
		{ concejo:"Laviana", pico:"Peña Mea", altura:1560, dificultad:2, latitud:43.1750861, longitud:-5.5610777, ascendido: false}
		,
		{ concejo:"Lena", pico:"Peña Ubiña", altura:2417, dificultad:3, latitud:43.0183638, longitud:-5.9567055, ascendido: false}
		,
		{ concejo:"Llanera", pico:"Pico Gorfolí", altura:585, dificultad:1, latitud:43.4809805, longitud:-5.9313194, ascendido: false}
		,
		{ concejo:"Llanes", pico:"Pico Cabeza Bubena", altura:1199, dificultad:2, latitud:43.3594194, longitud:-4.8573527, ascendido: false}
		,
		{ concejo:"Mieres", pico:"Pico Cuetu Ventosu", altura:1149, dificultad:1, latitud:43.1954749, longitud:-5.6458027, ascendido: false, alternativas:[
		{pico:"Burra Blanca", altura:1153, dificultad:1, latitud:43.1930833, longitud:-5.6315944, ascendido: false}
		]}
		,
		{ concejo:"Morcín", pico:"Pico La Gamonal", altura:1712, dificultad:2, latitud:43.2288111, longitud:-5.9481027, ascendido: false}
		,
		{ concejo:"Muros del Nalón", pico:"Muros", altura:132, dificultad:1, latitud:43.5422416, longitud:-6.1054277, ascendido: false}
		,
		{ concejo:"Nava", pico:"Triguero", altura:1291, dificultad:1, latitud:43.2769722, longitud:-5.4999638, ascendido: false}
		,
		{ concejo:"Navia", pico:"El Can", altura:842, dificultad:1, latitud:43.4851472, longitud:-6.6435999, ascendido: false}
		,
		{ concejo:"Noreña", pico:"Pico Santo Medero", altura:522, dificultad:1, latitud:43.3384222, longitud:-5.7310027, ascendido: false}
		,
		{ concejo:"Onís", pico:"Pico la Verdilluenga", altura:2129, dificultad:3, latitud:43.2247777, longitud:-4.9427305, ascendido: false}
		,
		{ concejo:"Oviedo", pico:"Picajo", altura:709, dificultad:1, latitud:43.2961083, longitud:-5.7736222, ascendido: false}
		,
		{ concejo:"Parres", pico:"Pico la Mota de Cetín", altura:1134, dificultad:2, latitud:43.2804222, longitud:-5.2029305, ascendido: false}
		,
		{ concejo:"Peñamellera Alta", pico:"Pico Jajao", altura:1425, dificultad:2, latitud:43.2649527, longitud:-4.7042833, ascendido: false}
		,
		{ concejo:"Peñamellera Baja", pico:"Picu Cuetu la Cerralosa", altura:1563, dificultad:2, latitud:43.265875, longitud:-4.6839777, ascendido: false}
		,
		{ concejo:"Pesoz", pico:"Pico Mosqueiro", altura:888, dificultad:1, latitud:43.3181555, longitud:-6.8900361, ascendido: false}
		,
		{ concejo:"Piloña", pico:"Pico Vízcares", altura:1419, dificultad:2, latitud:43.2659555, longitud:-5.2993027, ascendido: false}
		,
		{ concejo:"Ponga", pico:"Peña Ten", altura:2140, dificultad:3, latitud:43.103475, longitud:-5.1418611, ascendido: false}
		,
		{ concejo:"Pravia", pico:"Pico Llan de Cubel", altura:678, dificultad:1, latitud:43.5145555, longitud:-6.2180777, ascendido: false}
		,
		{ concejo:"Proaza", pico:"Peña Barzanalgas", altura:1489, dificultad:2, latitud:43.1691555, longitud:-6.0589138, ascendido: false}
		,
		{ concejo:"Quirós", pico:"Fontán Norte", altura:2417, dificultad:3, latitud:43.034875, longitud:-5.9589611, ascendido: false, alternativas:[
		{pico:"Fontán Sur", altura:2414, dificultad:3, latitud:43.0336722, longitud:-5.9604972, ascendido: false}
		]}
		,
		{ concejo:"Las Regueras", pico:"Pico Alto la Degollada", altura:613, dificultad:1, latitud:43.4520138, longitud:-6.0058944, ascendido: false}
		,
		{ concejo:"Ribadedeva", pico:"Pico Cuetu el Plaganu", altura:605, dificultad:1, latitud:43.3499277, longitud:-4.6256416, ascendido: false}
		,
		{ concejo:"Ribadesella", pico:"Pico Mofrechu", altura:891, dificultad:1, latitud:43.4075333, longitud:-5.0412361, ascendido: false}
		,
		{ concejo:"Ribera de Arriba", pico:"Pico Magarrón", altura:655, dificultad:2, latitud:43.2845472, longitud:-5.8443083, ascendido: false}
		,
		{ concejo:"Riosa", pico:"Pico Xistras", altura:1775, dificultad:2, latitud:43.1897527, longitud:-5.9165333, ascendido: false}
		,
		{ concejo:"Salas", pico:"Pico Aguión", altura:927, dificultad:1, latitud:43.46235, longitud:-6.3020833, ascendido: false}
		,
		{ concejo:"San Martín del Rey Aurelio", pico:"Pico Tres Concejos", altura:1096, dificultad:1, latitud:43.2206611, longitud:-5.6288666, ascendido: false}
		,
		{ concejo:"San Martín de Oscos", pico:"Pico La Vaga", altura:1081, dificultad:1, latitud:43.356675, longitud:-6.9298777, ascendido: false}
		,
		{ concejo:"Santa Eulalia de Oscos", pico:"Pico Oteiro Grande", altura:948, dificultad:1, latitud:43.3002277, longitud:-7.05345, ascendido: false}
		,
		{ concejo:"San Tirso de Abres", pico:"Pico Xunqueira", altura:661, dificultad:1, latitud:43.390075, longitud:-7.1136694, ascendido: false}
		,
		{ concejo:"Santo Adriano", pico:"Pico Grandamiana", altura:806, dificultad:1, latitud:43.2871833, longitud:-6.0211611, ascendido: false}
		,
		{ concejo:"Sariego", pico:"Pico Cima", altura:733, dificultad:1, latitud:43.4345416, longitud:-5.5922388, ascendido: false}
		,
		{ concejo:"Siero", pico:"Pico Cerro Gabio", altura:709, dificultad:1, latitud:43.4294055, longitud:-5.5976638, ascendido: false}
		,
		{ concejo:"Sobrescobio", pico:"Retriñón", altura:1862, dificultad:3, latitud:43.1342083, longitud:-5.4637527, ascendido: false}
		,
		{ concejo:"Somiedo", pico:"Peña Orniz", altura:2194, dificultad:3, latitud:43.0238194, longitud:-6.1222972, ascendido: false}
		,
		{ concejo:"Soto del Barco", pico:"Pico Alto la Corona", altura:467, dificultad:1, latitud:43.4820333, longitud:-6.0553222, ascendido: false}
		,
		{ concejo:"Tapia de Casariego", pico:"Pico Pousadoiro", altura:643, dificultad:1, latitud:43.4755416, longitud:-6.9576222, ascendido: false}
		,
		{ concejo:"Taramundi", pico:"Pico Abrego de Ouroso", altura:1032, dificultad:1, latitud:43.3403388, longitud:-7.0296194, ascendido: false}
		,
		{ concejo:"Teverga", pico:"Ferreirúa", altura:1980, dificultad:2, latitud:43.0626138, longitud:-6.03715, ascendido: false}
		,
		{ concejo:"Tineo", pico:"La Patana", altura:1526, dificultad:1, latitud:43.1624583, longitud:-6.3538138, ascendido: false}
		,
		{ concejo:"Valdés", pico:"Capiella Martín", altura:986, dificultad:1, latitud:43.4547611, longitud:-6.5988777, ascendido: false}
		,
		{ concejo:"Vegadeo", pico:"Pozo de la Nieve", altura:1130, dificultad:1, latitud:43.3748194, longitud:-6.9624388, ascendido: false}
		,
		{ concejo:"Villanueva de Oscos", pico:"Fuente Sagrada", altura:1162, dificultad:1, latitud:43.3725388, longitud:-6.9407916, ascendido: false}
		,
		{ concejo:"Villaviciosa", pico:"Viesca Redonda", altura:643, dificultad:1, latitud:43.4282194, longitud:-5.5592527, ascendido: false}
		,
		{ concejo:"Villayón", pico:"Carondio", altura:1221, dificultad:2, latitud:43.3202444, longitud:-6.7506277, ascendido: false}
		,
		{ concejo:"Yernes y Tameza", pico:"Peña Cruzada", altura:1374, dificultad:1, latitud:43.2167583, longitud:-6.1447138, ascendido: false}
	];

angular.module('techosAsturiasApp', [])
  .controller('TechosController', ['$scope', function($scope) {
	$scope.techos = data;
	
	$scope.totalAscendidos = 0;
	
	$scope.totalDificultadAscendidos = 0;
	
	$scope.clickFila = function(index){
		var ascendidos = 0,
			totalDificultad = 0;
		$scope.techos[index].ascendido = !$scope.techos[index].ascendido;
		
		for (var i = 0, max = $scope.techos.length; i<max; i++){
			if ($scope.techos[i].ascendido){
				ascendidos++;
				totalDificultad += $scope.techos[i].dificultad;
			}
		};
		
		$scope.totalAscendidos = ascendidos;
		$scope.totalDificultadAscendidos = totalDificultad;
	};
	
	$scope.porcentajeAscendidos = function(){
		return $scope.totalAscendidos * 100 / 78 + '%';
	};
	
	$scope.porcentajeDificultadAscendidos = function(){
		return Math.round($scope.totalDificultadAscendidos * 100 / 116); // 116 es el total de puntos de dificultad
	};
	
	$scope.alturaPorcentaje = function(index){
		/* El coeficiente se obtiene de dividir 365/2648.
		365 es la altura máxima en la gráfica y 2648 la altura máxima en la realidad */
		return ($scope.techos[index].altura * 0.137839);		
	};
	
	$scope.distanciaIzquierda = function(index){
		return (index*160);
	};
  }]);