
Below is a template for a README file covering the instructions, tool requirements, limitations, and assumptions for executing the tests:

### Cypress-Cucumber API Test Automation
This repository contains BDD tests implemented using Cypress and Cucumber for testing a REST API endpoint.

## How to Execute the Tests-

## Pre-requisites
1. Node.js installed on your machine ([download here](https://nodejs.org/en))
2. Git installed on your machine ([download here](https://git-scm.com/))


## Steps to Execute the Tests
1. Clone this repository to your local machine:
git clone <repository-url>

2. Navigate to the project directory: 
cd <project-directory>

3. Install dependencies:
   npm install

4. Run the tests using Cypress:
   Open Cypress Test Runner:
   npx cypress open

5.  Run tests in headless mode:
    npx cypress run

## Tool Requirements: 
Node.js: Required for running JavaScript-based Cypress tests.
Cypress: The testing framework used for executing the tests.
Git: Version control system used for managing project codebase.

## To generate a report- 
run the following command- npx cypress run.

## Test execution Report location-
/Users/abhadubey/Documents/GitHub/Code/cypress-cucumber-bdd/cypress/reports/index.html
Sample-
file:///Users/abhadubey/Documents/GitHub/Code/cypress-cucumber-bdd/cypress/reports/index_001.html


## Tests should run as shown in the below path and should generate a report
http://localhost:51944/__/#/specs/runner?file=cypress/e2e/api_tests/search_count.feature

Sample screenshot of a successful execution of the 3 tests created for this assignment-
<img width="806" alt="image" src="https://github.com/AbhaDubey7/Code/assets/166500415/086c6752-7dce-4e25-9f41-f5ed06766913">


## Limitations of the Tests
These tests are designed specifically for the provided REST API endpoint and may not be suitable for testing other endpoints without modifications.
The tests assume a stable internet connection for making API requests.
The tests do not cover edge cases related to network failures or server errors.

## Assumptions Made During Development
The API endpoint provided in the test scenarios is assumed to be accessible and return valid responses during test execution.
The expected response structure and properties are based on the provided sample response.
The tests assume that the test environment is properly configured to execute Cypress tests.
