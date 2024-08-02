import { expect } from 'chai';
import axios from 'axios';
import testData from './pet.POSTUpdateFromFormData.json' assert { type: 'json' };

describe('POST /pet/{petId}', function () {
    testData.forEach(({ petId, data, expectedStatus, expectedMessage }) => {
        it(`should return status ${expectedStatus} for petId ${petId}`, async function () {
            try {
                const response = await axios.post(`https://petstore.swagger.io/v2/pet/${petId}`, data, {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                // Assert status code for valid scenarios
                expect(response.status).to.equal(expectedStatus);

                if (expectedStatus === 200) {
                    // Check that the response message matches expected
                    expect(response.data.message).to.equal(expectedMessage);
                } else {
                    // For 404 or other error statuses
                    expect.fail(`Expected status ${expectedStatus} but got status ${response.status}`);
                }
            } catch (error) {
                // Handle errors and unexpected responses
                if (error.response) {
                    expect(error.response.status).to.equal(expectedStatus);
                    if (expectedMessage) {
                        expect(error.response.data.message).to.equal(expectedMessage);
                    } else {
                        // For cases where there's no expected error message
                        expect(error.response.data.message).to.be.undefined;
                    }
                } else {
                    expect.fail(`Error without response: ${error.message}`);
                }
            }
        });
    });
});