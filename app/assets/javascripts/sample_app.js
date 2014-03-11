var SampleApp = angular.module("SampleApp", [
  "SampleAppCtrls"
]);

// Create our Sample module with 'ngRoute' dependency
var SamplesRouter = angular.module("SamplesRouter", ["ngRoute"]);

SamplesRouter.config(["$routeProvider",
  function($routeProvider, $httpProvider){
  $routeProvider.when("/samples", {
    // Note here the path is just "samples/pretty_template"
    templateUrl: "/samples/pretty_template",
    controller: "SamplesCtrl"
  })
}]);