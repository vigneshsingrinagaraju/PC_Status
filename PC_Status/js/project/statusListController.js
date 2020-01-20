statusApp.controller('statusListController', ['$scope', '$timeout', '$http', '$window', '$rootScope', '$routeParams', 'apiUrl','$interval', function($scope, $timeout, $http, $window, $rootScope, $routeParams, apiUrl,$interval) {
  var stopTime;
  $scope.getFirstPCStatus = function() {
  $http({
    url: "http://demo1571331.mockable.io/firstPCStatus",
    method: "GET",
    headers: {'Content-Type':'application/json'}
  }).then(function(response) {
    $scope.statusList.push(response.data)
  }, 
  function(error){
      alertify.error("Could not connect to First PC");
  });
}
$scope.getSecondPCStatus = function() {
  $http({
    url: "http://demo1571331.mockable.io/secondPCStatus",
    method: "GET",
    headers: {'Content-Type':'application/json'}
  }).then(function(response) {
    $scope.statusList.push(response.data)
  }, 
  function(error){
      alertify.error("Could not connect to Second PC");
  });
}
$scope.getThirdPCStatus = function() {
  $http({
    url: "http://demo1571331.mockable.io/thirdPCStatus",
    method: "GET",
    headers: {'Content-Type':'application/json'}
  }).then(function(response) {
    $scope.statusList.push(response.data)
  }, 
  function(error){
      alertify.error("Could not connect to Third PC");
  });
}
$scope.getFourthPCStatus = function() {
  $http({
    url: "http://demo1571331.mockable.io/fourthPCStatus",
    method: "GET",
    headers: {'Content-Type':'application/json'}
  }).then(function(response) {
    $scope.statusList.push(response.data)
  }, 
  function(error){
      alertify.error("Could not connect to Fourth PC");
  });
}
$scope.getData= function(){
  $scope.statusList=[
    {
      "status":"running",
      "address":"Main Office. Building 47, 6th Floor.",
      "storeId":"Store 1",
      "total":"48",
      "lastHour":"12",
      "active":"3(308 seconds)",
      "gpuTemperature":"27 c",
      "memory":"2048 MB"
  },
  {
    "status":"stop",
    "address":"Main Office. Building 44, 10th Floor.",
    "storeId":"Store 2",
    "total":"22",
    "lastHour":"23",
    "active":"4(414 seconds)",
    "gpuTemperature":"42 c",
    "memory":"1048 MB"
},
{
  "status":"running",
  "address":"Main Office. Building 28, 11th Floor.",
  "storeId":"Store 3",
  "total":"11",
  "lastHour":"45",
  "active":"3(100 seconds)",
  "gpuTemperature":"33 c",
  "memory":"48 MB"
},{
  "status":"stop",
  "address":"Main Office. Building 12, 1th Floor.",
  "storeId":"Store 4",
  "total":"100",
  "lastHour":"11",
  "active":"1(200 seconds)",
  "gpuTemperature":"11 c",
  "memory":"4048 MB"
}
  ];
  // $scope.getSecondPCStatus();
  // $scope.getThirdPCStatus();
  // $scope.getFourthPCStatus();
  // $scope.getFirstPCStatus();
}
// var poll = function() {
//   $timeout(function() {
//     $scope.getData();
//       poll();
//   }, 10000);
// };     

$scope.initialize = function() {
  // poll();
  $scope.getData();
 }
 $scope.initialize();
}]);

