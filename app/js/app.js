var myApp = angular.module("myApp",[]);

myApp.controller('headercontroller',['$scope',function($scope) {
  // console.log("sumanta test parida");
}]);

myApp.controller('namecontroller', ['$scope', '$http', function($scope, $http) {
  $scope.name = null;
  $http.get('js/name.json')
    .then(function successCallback(response) {
    $scope.length = response.data.name.length;
    // $scope.sumanta = response.data.name;
    $scope.cruise = response.data.name;
    $scope.limit = 18;
    for (var i = 0; i < $scope.length; i++) {
      $scope.name = response.data.name;
      // console.log($scope.name);
    }
   }, function errorCallback(response) {
   console.log("error");
   });
   // Alphabet Filter
   var str = "abcdefghijklmnopqrstuvwxyz";
   $scope.alphabet = str.toUpperCase().split("");
   $scope.test = '';
   $scope.activateLetter = function(letter) {
     $scope.test = letter
   }
   // Load more
   $scope.loadMore = function() {
     var increamented = $scope.limit + 18;
     $scope.limit = increamented > $scope.cruise.length ? $scope.cruise.length : increamented;
   };

}]);
