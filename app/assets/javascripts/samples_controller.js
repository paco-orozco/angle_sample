var SampleAppCtrls = angular.module("SampleAppCtrls", []);

SampleAppCtrls.controller("SamplesCtrl", ["$scope", "$http",
  function($scope){
  // fake samples
  $scope.fakeSamples = [
    {name: "bunny", description: "fluffy"},
    {name: "Green Stuff", description: "meh"},
    {name: "elephant", description: "big"}
  ];
  // requesting more samples
  $http.get("/samples.json").success(function(data){
    console.log(data);
    $scope.fakeSamples = $scope.fakeSamples.concat(data);
  });

}]);