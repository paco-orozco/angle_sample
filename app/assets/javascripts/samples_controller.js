var SampleAppCtrls = angular.module("SampleAppCtrls", []);

SampleAppCtrls.controller("SamplesCtrl", ["$scope", "$http",
  function($scope, $http){
  // fake samples
  $scope.samples = [
    {name: "bunny", description: "fluffy"},
    {name: "Green Stuff", description: "meh"},
    {name: "elephant", description: "big"}
  ];
  // requesting more samples
  $http.get("/samples.json").success(function(data){
    console.log(data);
    $scope.samples = $scope.samples.concat(data);
  });
  $scope.addSample = function(){

  };

}]);