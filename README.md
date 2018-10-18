# GitHubSearch-Angular
A github search app written in Angular 1.6.51 that searches public repos by name.
This does NOT search your local or installed repos.
This app used the Github API and this search URL format: https://api.github.com/search/issues?q=repo:username/reponame

Using npm to install dev dependencies/support for Typescript 3. 
Steps to repro my setup:
1. In your command prompt: 
  $ npm init to create package.json
2. $ npm install typescript --save-dev
3. $ npm install @types/angular --save

There should be a typescript build configuration file, but if there's not create a file "tsconfig.json" with the contents you see in the file in this repo.

To build enter in command line:
$ node_modules/.bin/tsc
