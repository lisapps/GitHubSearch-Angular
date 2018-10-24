/**
 * @ngInject
 */
export class ReposListComponent {
  // Define our ReposListComponent component's name
  static componentName:string = "msReposList";

  // Define our ReposListComponent component's component config
  static componentConfig:ng.IComponentOptions = {
    bindings: {
      repos: '<',
      selected: '<',
      selectRepo: '&onSelected'
    },
    controller: ReposListComponent,
    template: `
      <md-list>
        <md-list-item ng-repeat="repo in $ctrl.repos">
        <md-button ng-click="$ctrl.selectRepo({repo:repo})" ng-class="{'selected' : repo === $ctrl.selected}">
            <md-icon md-svg-src="{{repo.owner.avatar_url}}" class="avatar"></md-icon>
            {{repo.name}}
            </md-button>
        </md-list-item>
      </md-list>`
  };
}
