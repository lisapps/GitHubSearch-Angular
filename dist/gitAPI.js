angular.module('gitAPI', [])
//.constant('baseURL', 'https://api.github.com/search/repositories')
.factory('gitAPI', ['$http', function($http){

    function gitAPI() {
    }

    gitAPI.prototype.searchRepos = function(baseURL,term) {
        console.log('https://api.github.com/search/repositories', { params: { q: term } });
        return $http.get(baseURL, { params: { q: term } });
    };

    return gitAPI;
}]);