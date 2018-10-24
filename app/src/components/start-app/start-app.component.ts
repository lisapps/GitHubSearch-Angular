import {Repo} from "../../users/repos.ts";
import {ReposDataService} from "../../users/services/repos-data.service.ts";


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
  private selected:Repo;
  private searchTerm:string = 'bootstrap';

  // Define our constructor and inject the necessary services
  constructor($mdSidenav:angular.material.ISidenavService, ReposDataService:ReposDataService) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;
    this.ReposDataService = ReposDataService;


    // Load our repos and store them to a variable
    ReposDataService.loadAllRepos(this.searchTerm).then((repos:Repo.data.items[]) => {
      this.repos = repos.data.items;
      this.selected = repos[0];
      //console.log(this.repos);
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
}
