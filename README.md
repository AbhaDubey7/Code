# Swagger Petstore API Testing

## Overview
This project automates the testing of the Swagger Petstore API PET Endpoints using Mocha, Chai, and Axios. 
The tests cover multiple HTTP methods (GET, POST, PUT, DELETE) for various pet (Everything about your Pets) endpoints. The test scripts validate the status codes and response bodies based on provided test data.

# Pre requisites
* Before running the tests, ensure you have the following installed on your machine:
* Ensure you have Node.js installed on your system. `Node.js (v20.13.1)`
* You will also need to install the axios and form-data packages.

# Project Setup
Clone the repository to your local machine:

## 1. Setup :Clone the Repository: #
* git clone 'https://github.com/AbhaDubey7/Code.git'
* Branch Details- `feature/AbhaDubey-CBATest`
* Project folder to refer-  `petstore-api-test`
* cd `petstore-api-test`

## 2. Install dependencies ##
`npm install` (v10.5.2)
* Initialize a Node.js Project by running this command: `npm init -y`

## 3. Install Required Packages: ##
Please use the following commands:-
* npm install axios mocha chai 
* npm install supertest
* npm install  form-data

## 4. Package.json  
* This file contains the meta data for the project, including all the dpendencies and scripts

## 5. Index.mjs
* The index.mjs file is responsible for importing and running all test files.
* This file ensures that when you run npm test, all the imported test files are executed sequentially.

## Running Tests ##
* Test scripts are with .mjs format
* Test data is in .json format.
eg- Test file  `pet.POST.AddANewPettest.mjs`
Its corresponding Test data `pet.POST.AddANewPettest.json`

## 6. To run a specific test, use the following command: ##
* `npx mocha tests/API/pet.POST.AddANewPettest.mjs`
*  `npx mocha tests/API/pet.POST.ImageUpload.mjs`

## 7. To run all the tests at once, use the following command: 
* `npx mocha tests/index.mjs`

## 8. Test Overview

1. DELETE /pet/{petId}

	•	Tests for deleting a pet with specific IDs.
	•	Validates responses for successful deletion and errors when pet ID is not found.

2. PUT /pet

	•	Tests for updating a pet’s details.
	•	Validates responses for successful update and errors when invalid data is supplied.

3. POST /pet/ Add a new PET

	•	Tests for creating a new pet.
	•	Validates responses for successful creation and errors when invalid data is supplied.

4. POST /pet/{petId}/uploadImage

	•	Tests for uploading an image to a pet.
	•	Validates successful image upload and checks the response code and message.

5. POST  /pet/{petId} Updates a pet in the store with form data

	•	Tests to updatea a pet in the store with form data
	•	Validates responses for successful creation and errors when invalid data is supplied.

6. GET /pet/findByStatus

	•	Tests for getting the status of a pet (Status- available, pending, sold).
	•	Validates successful call and checks the response code and message.

7.  GET /pet/{petId}

	•	Tests for getting the status of a pet using id of a pet 
	•	Validates successful calla nnd checks the response code and message.
    
## Conclusion

This README file provides a detailed overview of setting up and running API tests against the Swagger Petstore. It includes instructions on how to install dependencies, create test data, and execute the test scripts. Adjust the instructions as needed to fit your specific environment and project requirements.
