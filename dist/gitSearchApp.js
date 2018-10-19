'use strict';
// Declare app level module
var gitSearchApp = angular.module('gitSearchApp', ['ngRoute', 'gitAPI', 'SearchController', 'dataService']);
// assigning values to use in gitAPI, making gitAPI generic and reusable.
gitSearchApp.value('initSearchValue', 'bootstrap');
gitSearchApp.directive('pressEnter', [function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEnter, { 'event': event });
                    });
                    event.preventDefault();
                }
            });
        };
    }]);
gitSearchApp.filter('offset', function () {
    return function (input, start) {
        if (input) {
            start = parseInt(start, 10);
            return input.slice(start);
        }
    };
});
angular.module('SearchController', []).controller('SearchController', ['$scope', 'gitAPI', 'initSearchValue', 'dataService', function ($scope, gitAPI, initSearchValue, dataService) {
        $scope.term = initSearchValue;
        $scope.results = [];
        var getData = new gitAPI();
        var baseURL = 'https://api.github.com/search/repositories';
        $scope.$watch('term', function () {
            getData.searchRepos(baseURL, $scope.term)
                .then(function successCallback(response) {
                // console.log(apiResponse);
                // $scope.results = response.data.items;
                var apiResponse = response.data.items;
                $scope.results = filterData(apiResponse);
                //$scope.results = dataService.cleanData(apiResponse);
                console.log('This is inside callback data: ' + $scope.results);
            }, function errorCallback(data, status) {
                //console.log('no results');
                console.error('Repos error', status, data);
            });
            function filterData(apiResponse) {
                //var apiResponse = data;
                console.log('This is inside "filterData": ' + apiResponse);
                // $scope.results = apiResponse;
                var ourDetails = [];
                apiResponse.forEach(function (result) {
                    let filteredDetail;
                    filteredDetail = {};
                    filteredDetail.title = result.name;
                    filteredDetail.description = result.description;
                    filteredDetail.createdAt = result.created_at;
                    filteredDetail.watchers = result.watchers;
                    filteredDetail.owner = result.owner;
                    ourDetails.push(filteredDetail);
                });
                console.log('This is "ourDetails" inside "filterData": ' + ourDetails);
                return ourDetails;
            }
        });
    }]);
angular.module('dataService', []).service('dataService', [function () {
        this.cleanData = function (apiResponse) {
            var ourDetails = [];
            apiResponse.array.forEach(element => {
                let filteredDetail;
                filteredDetail = {};
                filteredDetail.title = apiResponse.name;
                filteredDetail.description = apiResponse.description;
                filteredDetail.createdAt = apiResponse.created_at;
                filteredDetail.watchers = apiResponse.watchers;
                filteredDetail.owner = apiResponse.owner;
                ourDetails.push(filteredDetail);
            });
            return ourDetails;
        };
    }]);
//# sourceMappingURL=gitSearchApp.js.map