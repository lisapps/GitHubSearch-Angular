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

Because this app has multiple files to support MVC instead of having all code in one file, you need to serve the app - not just open index.html in your browser.

To RUN THE FILES AS IS:

1. Make sure you have python installed.
2. Open your bash/command prompt and navigate to the main "GithubSearch" folder that you cloned. 
3. Run a simmple python http server. To do this after you have Python installed enter:

$ python -m http.server 8000

4. Go to this url in your browser: http://localhost:8000/

