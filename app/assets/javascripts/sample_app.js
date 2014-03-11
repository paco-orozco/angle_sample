var SampleApp = angular.module("SampleApp", [
  "SampleAppCtrls",
  "SamplesRouter"
]);

// Create our Sample module with 'ngRoute' dependency
var SamplesRouter = angular.module("SamplesRouter", ["ngRoute"]);

SamplesRouter.config(["$routeProvider",function($routeProvider){
  $routeProvider.when("/samples", {
    // Note here the path is just "samples/pretty_template"
    templateUrl: "/samples/pretty_template",
    controller: "SamplesCtrl"
  })
}]);