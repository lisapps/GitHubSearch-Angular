// Load the TypeScript UsersService
import {ReposDataService} from './services/repos-data.service.ts';

// Define our User interface. This is for Typescript only and doesn't provide access to these values.
export interface Repo {
  owner: string; //owner.login
  avatar: string; //owner.avatar.url
  url: string;
  description: string;
  name: string;
  created_at: string;
  watchers: string;
}

// Define the Angular 'Repos' module

export module Repos {
  export var name:string = 'Repos';
  export var searchTerm:string;

  angular
    .module(Repos.name, ['ngMaterial'])
    .service("ReposDataService", ReposDataService);
}