var app=angular.module('login',['oc.lazyLoad','ngComponentRouter','ngRoute','LocalStorageModule']);
app.component('login',{
		templateUrl:'views/login.html',
		controller:['$rootScope','$scope','$rootRouter','$ocLazyLoad','$location','localStorageService',loginCtrl]

});
function loginCtrl($rootScope,$scope,$rootRouter,$ocLazyLoad,$location,localStorageService){
		$rootScope.showNav=false;

		$scope.login=function(){

		if($scope.username=="admin" && $scope.password=="test"){

			localStorageService.set('login',true);
			$location.path('/home')
		}
		else{
			$scope.error="Invalid username and password";
		}
		}
}
