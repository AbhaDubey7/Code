import { expect } from 'chai';
import axios from 'axios';
import postData from './pet.POST.AddANewPettest.json' assert { type: 'json' };


describe('POST /pet', function () {
    postData.forEach(({ id, category, name, photoUrls, tags, status, expectedStatus, expectedMessage }) => {
        it(`should return status ${expectedStatus} for payload with name ${name}`, async function () {
            try {
                const response = await axios.post('https://petstore.swagger.io/v2/pet', {
                    id,
                    category,
                    name,
                    photoUrls,
                    tags,
                    status
                }, {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                // Assert the status code
                expect(response.status).to.equal(expectedStatus);

                if (expectedStatus === 200) {
                    // Check that the response contains the expected values
                    expect(response.data).to.deep.include({
                        id,
                        category,
                        name,
                        photoUrls,
                        tags,
                        status
                    });
                } else {
                    // If a 405 error is expected, assert that the error message matches
                    expect(response.data.message).to.equal(expectedMessage);
                }
            } catch (error) {
                // Handle the case where no response is received
                if (error.response) {
                    if (expectedStatus === 405) {
                        expect(error.response.status).to.equal(expectedStatus);
                        expect(error.response.data.message).to.equal(expectedMessage);
                    } else {
                        // Log unexpected errors
                        console.log(`Unexpected Error: ${error.message}`);
                    }
                } else {
                    // Handle cases where error.response is undefined
                    if (expectedStatus === 405) {
                        expect.fail(`Expected status ${expectedStatus} but got an error without response data: ${error.message}`);
                    } else {
                        // Handle other errors
                        expect.fail(`Unexpected error: ${error.message}`);
                    }
                }
            }
        });
    });
});