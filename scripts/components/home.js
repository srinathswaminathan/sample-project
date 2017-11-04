var app=angular.module('home',['oc.lazyLoad','ngComponentRouter','ngRoute','LocalStorageModule'])
app.component('home',{
	templateUrl:'views/home.html',
	controller:['$rootScope','$scope','$rootRouter','$ocLazyLoad','localStorageService','$location',homeCtrl]
});

function homeCtrl($rootScope,$scope,$rootRouter,$ocLazyLoad,localStorageService,$location){
		$rootScope.showNav=true;
		$rootScope.login=true;
		$scope.listdata=[];
		
		$scope.saveuser=function(data){
		$scope.listdata.push({firstname:data.firstname,lastname:data.lastname,email:data.email})	
		localStorageService.set('listdata',$scope.listdata);

			$('#openmodel').modal('hide');
		}

	$rootScope.logout=function(){
		localStorage.clear();
		$location.path("");

	}	
}


