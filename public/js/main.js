angular.module('alurapic',['minhasDiretivas', 'ngAnimate', 'ngRoute', 'MeusServicos'])
	.config(function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController as ctrl'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController as ctrl'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController as ctrl'
		});

		$routeProvider.otherwise({
			redirectTo: '/fotos'
		});

	});
