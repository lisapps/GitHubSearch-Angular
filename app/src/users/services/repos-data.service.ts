import {Repo} from "../repos.ts";

/**
 * Users Data Service
 *
 * Uses embedded, hard-coded data model; acts asynchronously to simulate remote data service call(s).
 * Interface/callback is in repos.ts
 * 
 * @returns {{loadAll: Function}}
 * @constructor
 * @ngInject
 */

import {IHttpService} from 'angular'
 
export class ReposDataService {


    public Repo: object;

    constructor(private $http: IHttpService) {

    //     var result = $http.get(this.baseURL, { params: { q: this.term } });
    //    return result;

  
    }

    fetch(term){
        this.Repo =  this.$http.get('https://api.github.com/search/repositories', { params: { q: term } });
        //console.log('result inside fetch: ' + this.repos);
        return this.Repo;
    }

 

  /**
   * Returns a promise which asynchronously loads the list of repos. Would be better with ng-Resource 
   * if there was time to implement.
   *
   * 
   */
  loadAllRepos(term) {
    // Simulate async nature of real remote calls
    this.fetch(term);
    //console.log('result inside loadAllRepos: ' + this.Repo[0]);
    return this.Repo;

    
  }
}

