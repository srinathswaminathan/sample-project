angular.module('baseapp',['oc.lazyLoad','ngComponentRouter','ngRoute']);

angular.module('baseapp').component('app',{

	templateUrl:"views/main.html",
	controller  :["$rootScope","$scope","$rootRouter","$ocLazyLoad",
	function($rootScope,$scope,$rootRouter,$ocLazyLoad){
		$rootRouter.config([
				{
					path:"/", name:"Login", loader:function(){
					return $ocLazyLoad.load("scripts/components/login.js").then(function(){
						return 'login';
					});		

					}
				},
				{
					path:"/home", name:"Home", loader:function(){
						return $ocLazyLoad.load("scripts/components/home.js").then(function(){
							return 'home';
						});
					}
				},
				{		
					path:"/list",name:"List", loader:function(){
							return $ocLazyLoad.load("scripts/components/list.js").then(function(){
								return 'list';
							});
					}
				}	

			]);

	}

]

});
angular.module('baseapp').config(['$locationProvider', function($locationProvider) {
     $locationProvider.hashPrefix('');
}]);

