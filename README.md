# Swagger Petstore API Testing

## Overview
This project automates the testing of the Swagger Petstore API PET Endpoints using Mocha, Chai, and Axios. 
The tests cover multiple HTTP methods (GET, POST, PUT, DELETE) for various pet (Everything about your Pets) endpoints. The test scripts validate the status codes and response bodies based on provided test data.


# Pre requisites

Before running the tests, ensure you have the following installed on your machine:
	•	Node.js (v20.13.1)
	•	npm (10.5.2)

# Project Setup
Clone the repository to your local machine:

## 1. Setup :Clone the Repository: #
* git clone 'https://github.com/AbhaDubey7/Code.git'
* Branch Details- `feature/AbhaDubey-CBATest`
* Project folder to refer-  `petstore-api-test`
* cd `petstore-api-test`

## 2. Install dependencies ##
`npm install`

## 3. Install Required Packages: ##
Please use the following command:-
`npm install axios mocha chai` 

## Running Tests ##
* Test scripts are with .mjx format
* Test data is in .json format.
eg- Test file  `pet.POST.AddANewPettest.mjs`
Its corresponding Test data `pet.POST.AddANewPettest.json`


## 4. To run the test suite, use the following command: ##
* npx mocha tests/pet.POST.AddANewPettest.mjs

` Note: Please execute pet.POST.AddANewPettest.mjs before executing DELETE endpoint.`

## Conclusion

This README file provides a detailed overview of setting up and running API tests against the Swagger Petstore. It includes instructions on how to install dependencies, create test data, and execute the test scripts. Adjust the instructions as needed to fit your specific environment and project requirements.
