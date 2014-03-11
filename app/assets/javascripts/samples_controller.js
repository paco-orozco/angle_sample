var SampleAppCtrls = angular.module("SampleAppCtrls", []);

SampleAppCtrls.controller("SamplesCtrl", ["$scope", function($scope){
  // fake samples
  $scope.fakeSamples = [
    {name: "bunny", description: "fluffy"},
    {name: "Green Stuff", description: "meh"},
    {name: "elephant", description: "big"}
  ];

}]);