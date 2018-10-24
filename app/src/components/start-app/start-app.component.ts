import {Repo} from "../../users/repos.ts";
import {ReposDataService} from "../../users/services/repos-data.service.ts";
import {ISCEService} from 'angular';


/**
 * @ngInject
 */
export class AppComponent {
  // Define our AppComponent's name
  static componentName:string = "msApp";

  // Define our AppComponent's config
  static componentConfig:ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: 'src/components/start-app/start-app.component.html'
  };

  // Define our injectables
  private $mdSidenav:angular.material.ISidenavService;
  private ReposDataService:ReposDataService;

  // Define our own variables
  private repos:Repo[];
  private searchTerm:string = 'bootstrap';
  private $sce: ISCEService;
  //private filteredRepo:Repo;
  private selected:Repo;

  // Define our constructor and inject the necessary services
  constructor($mdSidenav:angular.material.ISidenavService, ReposDataService:ReposDataService, $sce: ISCEService, ) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;
    this.ReposDataService = ReposDataService;
    this.$sce = $sce;

    // Load our repos and store them to a variable
    ReposDataService.loadAllRepos(this.searchTerm).then((repos:Repo.data.items[]) => {
      this.repos = repos.data.items;
      this.selected = this.repos[0];
      console.log(this.repos);

    });
  }

 

  /**
   * Select the current repo
   *
   * @param repo The repo to be selected.
   */

  selectRepo(repo:number|Repo) {
    // Set our selected repo
    this.selected = angular.isNumber(repo) ? this.repos[<number> repo] : <Repo> repo;
  }
  doSearch(term) {
    this.searchTerm = term;
    this.ReposDataService.loadAllRepos(this.searchTerm).then((repos:Repo.data.items[]) => {
      this.repos = repos.data.items;
      this.selected = this.repos[0];
    //console.log('term updated to: ' + term);
  }

}
