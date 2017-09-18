var app = angular.module("tinyurlApp");

app.controller("homeController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
	var serverURL = "http://ec2-52-43-217-115.us-west-2.compute.amazonaws.com:3000";
    $scope.submit = function () {
        $http.post(serverURL, {
            longUrl: $scope.longUrl
        })
        .success( function (data) {
            $location.path(serverURL + data.shortUrl);
        });
    }
}]);

//ec2-52-43-217-115.us-west-2.compute.amazonaws.com:3000