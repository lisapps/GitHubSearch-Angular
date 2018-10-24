/// <reference path="../../../../../typings/index.d.ts" />

// Import our Angular dependencies
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

import {AppComponent} from "../../components/start-app/start-app.component.ts";
import {UsersListComponent} from "../components/users-list/users-list.component.ts";
import {ReposListComponent} from "../components/users-list/repos-list.component.ts";
import {UserDetailsComponent} from "../components/user-details/user-details.component.ts";


import {Users} from '../users.ts';
import {Repos} from '../repos.ts';

module searchStart {
  "use strict";

  // Register our module and it's dependencies
  angular.module('myApp', ['ngMaterial', 'ngSanitize', Users.name, Repos.name])
    .config(function ($mdIconProvider:angular.material.IIconProvider, $mdThemingProvider:angular.material.IThemingProvider) {
      // Register the user `avatar` icons
      $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("share", "./assets/svg/share.svg", 24)
        .icon("google_plus", "./assets/svg/google_plus.svg", 24)
        .icon("hangouts", "./assets/svg/hangouts.svg", 24)
        .icon("twitter", "./assets/svg/twitter.svg", 24)
        .icon("phone", "./assets/svg/phone.svg", 24);

      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('yellow');
    })

    // Register all of our components
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .component(UsersListComponent.componentName, UsersListComponent.componentConfig)
    .component(UserDetailsComponent.componentName, UserDetailsComponent.componentConfig)
    .component(ReposListComponent.componentName, ReposListComponent.componentConfig)
  ;

  
}