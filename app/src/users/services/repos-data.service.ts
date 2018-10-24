import {Repo} from "../repos.ts";

/**
 * Repos Data Service
 *
 * Uses embedded, hard-coded data model; acts asynchronously to simulate remote data service call(s).
 * Interface/callback is in repos.ts
 * 
 * @returns {{loadAll: Function}}
 * @constructor
 * @ngInject
 */

import {IHttpService} from 'angular'
//import {ISCEService} from 'angular'

 
export class ReposDataService {

    public Repo: object;
    private $sce:ISCEService;

    constructor(private $http: IHttpService) {
      //this.$sce = $sce;
    }

    fetch(term){
      let url = ('https://api.github.com/search/repositories');
        this.Repo =  this.$http.get(url, { params: { q: term } });
        return this.Repo;
    }

 

  /**
   * Returns a promise which asynchronously loads the list of repos. Would be better with ng-Resource 
   * if there was time to implement.
   *
   * 
   */
  loadAllRepos(term) {
    
    this.fetch(term);
    return this.Repo;
    
  }
}

