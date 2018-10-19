// Declare app level module
var gitSearchApp = angular.module('gitSearchApp', ['ngRoute', 'gitAPI', 'SearchController']);
gitSearchApp.value('initSearchValue', 'bootstrap');
/* gitSearchApp.factory('gitAPI', ['$http', function($http){

    function gitAPI() {
    }

    gitAPI.prototype.searchRepos = function(term) {
        return $http.get('https://api.github.com/search/repositories', { params: { q: term } });
    };

    return gitAPI;
}]), */
angular.module('SearchController', []).controller('SearchController', ['$scope', 'gitAPI', 'initSearchValue', function ($scope, gitAPI, initSearchValue) {
        $scope.term = initSearchValue;
        $scope.results = [];
        var getData = new gitAPI();
        var baseURL = 'https://api.github.com/search/repositories';
        $scope.$watch('term', function () {
            getData.searchRepos(baseURL, $scope.term).then(function successCallback(response) {
                $scope.results = response.data;
                //console.log($scope.results);
            }, function errorCallback(response) {
                //console.log('no results');
            });
        });
    }]);
//# sourceMappingURL=gitSearchApp.js.map