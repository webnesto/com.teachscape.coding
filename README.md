# Coding example for Teachscape (fork of com.teachscape.coding )

A web application that allows a user to create a reservation for a meal at a restaurant.
###Requirements:
- App must allow user to select restaurant
- App must allow user to select date and time
- App must provide user feedback if requested date and time are not available
- App must provide user feedback if reservation is successful showing time, restaurant name, party size, and confirmation number

###Assumptions:
- Tested desktop browsers for initial release are: IE 11, Chrome 45.0.x, FF 40.0.x, Safari 8.0.x
- Tested mobile browsers for initial release are: Safari iOS 8.4 & iOS 9.0
- No name required – confirmation # will be only key

###Required Next Steps:
- Determine target supported operating systems, browsers and browser versions to address any compatibility issues
- Connect to backend data services (mocked static data or random chance used for demo)
- Design review / usability testing 

###Future Enhancement recommendations:
- Support for different hours of operation on different days
- Only display dates when restaurant open (or otherwise disable) days restaurant closed
- Disable (in visual manner differing from closed days) days where no reservations are available
- Support for disabling “same day” reservation (per restaurant)
- Only display future dates
- Add support for reserving times by quarter hour
- Add support for restaurant individual setting of max number of diners
- Print CSS layout for confirmation page
- Write comprehensive test suite (TDD was bypassed for speed in dev of application)

---
*What follows is a modified version of the boilerplate from Angular-Seed (has been updated for project specific information (pathing, files, etc))*

## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test com.teachscape.coding. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone com.teachscape.coding

Clone the com.teachscape.coding repository using [git][git]:

```
git clone https://github.com/webnesto/com.teachscape.coding.git
cd com.teachscape.coding
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
com.teachscape.coding changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  data/                 --> static JSON files (TODO: replaced service)
    restaurants.json      --> array of restaurants w/ restaurant info
  fonts/*               --> webfont files
  images/*              --> images in use
  services/             --> Angular services, such as models and $http objects
    errorModel.js         --> error information on failed reservation
    http_reservation.js   --> asynch DAO for reservation submission service
    http_restaurants.js   --> asynch DAO for restaurant data service
  views/                --> Main views/routes - template, controller & test
    confirmation/*        --> successful reservation view
    error/*               --> error in reservation submission
    reservation/*         --> reservation form
    restaurants/*         --> list of restaurants to choose from (default view)
  app.css               --> lessc out put from app.less
  app.js                --> main application module
  app.less              --> less formatted css pre-compiled style rules
  index.html            --> app layout file
```

### Running the App during Development

The com.teachscape.coding project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The com.teachscape.coding
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
