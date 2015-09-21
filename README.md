# Coding example for Teachscape (fork of com.teachscape.coding )

A web application that allows a user to create a reservation for a meal at a restaurant.

###Requirements:
- App must allow user to select restaurant
- App must allow user to select date and time
- App must provide user feedback if requested date and time are not available
- App must provide user feedback if reservation is successful showing time, restaurant name, party size, and confirmation number

![flow](https://raw.githubusercontent.com/webnesto/com.teachscape.coding/master/resources/flow.png)

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

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    filter_date.js        --> filter for rendering UTC as MM/DD/YYYY
    filter_hours.js       --> filter for rendering 24hour time as 12hr w/ am/pm
    filter_people.js      --> filter to render a string "1 person"/"# people"
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


[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
