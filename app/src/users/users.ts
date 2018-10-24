// Load the TypeScript UsersService
import {UsersDataService} from './services/users-data.service.ts';
import {ReposDataService} from './services/repos-data.service.ts';

// Define our User interface
export interface User {
  owner: string;
  avatar: string;
  url: string;
  description: string;
  title: string;
  createdAt: string;
  watchers: string;
}

// Define the Angular 'Users' module
export module Users {
  export var name:string = 'Users';

  angular
    .module(Users.name, ['ngMaterial'])
    .service("UsersDataService", UsersDataService);
}

export module Repos {
  export var name:string = 'Repos';

  angular
    .module(Repos.name, ['ngMaterial'])
    .service("ReposDataService", ReposDataService);
}