var app=angular.module('list',['oc.lazyLoad','ngComponentRouter','ngRoute','LocalStorageModule']);
app.component('list',{
	templateUrl:'views/list.html',
	controller:['$rootScope','$scope','$rootRouter','$ocLazyLoad','localStorageService',listCtrl]

});
function listCtrl($rootScope,$scope,$rootRouter,$ocLazyLoad,localStorageService){
		$rootScope.showNav=true;
		$scope.listdata=[];
		$scope.editdata=[];
		
		$scope.data = {
			efirstname : '',
			elastname : '',
			eemail : ''
		}
		$scope.listdata=localStorageService.get('listdata');

		//delete
		$scope.delete=function(index)
		{
			$scope.listdata.splice(index,1);	
			localStorageService.set('listdata',$scope.listdata);
		}
		//update
		$scope.editmod=function(res,index)
		{$(
			"#openmodel2").modal("show");
			// $scope.efirstname=data.firstname,
			// $scope.elastname=data.lastname,
			// $scope.eemail=data.email,

			res = {data:{
				efirstname : res.firstname,
				elastname : res.lastname,
				eemail :res.email,
				index:index
			}};
			$scope.data = res.data;
			// $scope.editdata.push({firstname:data.firstname,lastname:data.lastname,email:data.email});
			// localStorageService.set("editdata",$scope.editdata);
			
			$scope.edit=true;
		}
		$scope.submited=false;
		$scope.update=function(data,index){
			$scope.submited=true;
			if((data.efirstname=="" || data.efirstname==undefined ) || (data.elastname =="" || data.elastname ==undefined ) || (data.eemail =="" || data.eemail ==undefined)){
				return;
			}
			$scope.editmodelForm.$setPristine();
			var data={firstname:data.efirstname,lastname:data.elastname,email:data.eemail,index:data.index};
			$scope.listdata[index]=data
			// $scope.listdata[data.index].lastname=data.elastname,
			// $scope.listdata[data.index].email=data.eemail
			localStorageService.set('listdata',$scope.listdata);
		}
}