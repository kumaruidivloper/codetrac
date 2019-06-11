# Codetrac

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Steps For Run The Application
Step:1 npm install
Step2: npm start run [command for run the application]
Step4: application open in portal localhost:4200
Step5: server running in localhost:3000


## Server SetUp

STEP1: Create server folder
STEP2: inside server folder run commend [npm init --yes]
// express our server
// body-parser middleware to handle form data such as user registration
or login
STEP3: run command [npm install express body-parser --save]
// After step-3 node module and package json will be installed in server folder
STEP4: create server.js file in server folder
// Edit below code for your server

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 4000;

const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello from server');
})

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT)
})

STEP5: Run server - node server [server will run port-4000]



## Router API.Json
STEP1: Create router folder inside server folder
STEP2: Create api.js file inside the router folder

<!--paste the below code in api.js-->

[const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('From API Route')
})]

STEP3: Update the below code in server.js

[const express = require('express');
const bodyParser = require('body-parser');

const PORT = 4000;
const api = require('./routes/api')

const app = express();

app.use(bodyParser.json());

app.use('/api', api)

app.get('/', function(req, res) {
    res.send('Hello from server');
})

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT)
})]


module.exports = router


STEP5:run cmd [node server] navigate to http://localhost:4000/api

## Mongoose DB Connection

STEP1: install mongoose inside server folder [npm install --save mongoose]

STEP2: Create blue-print Or Schema of the the DB Object in server folder so inside server folder create folder called models --> user.js






## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
