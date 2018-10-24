import {User} from "../../users/users.ts";
import {Repo} from "../../users/repos.ts";
import {UsersDataService} from "../../users/services/users-data.service.ts";
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
  //private UsersDataService:UsersDataService;
  private ReposDataService:ReposDataService;

  // Define our own variables
  //private users:User[];
  //private selected:User;
  private repos:Repo[];
  private repo_selected:Repo;

  // Define our constructor and inject the necessary services
  constructor($mdSidenav:angular.material.ISidenavService, UsersDataService:UsersDataService, ReposDataService:ReposDataService) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;
    //this.UsersDataService = UsersDataService;
    this.ReposDataService = ReposDataService;

    // Load our users and store them to a variable
    /* UsersDataService.loadAllUsers().then((users:User[]) => {
      this.users = users;
      this.selected = users[0];
    }); */

    // Load our repos and store them to a variable
    ReposDataService.loadAllRepos('bootstrap').then((repos:Repo.data.items[]) => {
      this.repos = repos.data.items;
      this.repo_selected = repos[0];
      console.log(this.repos);
    });
  }



  /**
   * Select the current user and closes the users list.
   *
   * @param user The user to be selected.
   */
  selectUser(user:number|User) {
    // Set our selected user
    this.selected = angular.isNumber(user) ? this.users[<number> user] : <User> user;

  

    // If the users list/sidenav is open; we want to make sure to close it
   // this.$mdSidenav('left').close();
  }
  selectRepo(repo:number|Repo) {
    // Set our selected user
    this.selected = angular.isNumber(repo) ? this.repos[<number> repo] : <Repo> repo;
  }
}
