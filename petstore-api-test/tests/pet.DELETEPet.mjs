import { expect } from 'chai';
import axios from 'axios';
import testData from './pet.DELETEPet.json' assert { type: 'json' };


describe('DELETE /pet/{petId}', function () {
    testData.forEach(({ petId, expectedStatus, expectedMessage }) => {
        it(`should return status ${expectedStatus} for petId ${petId}`, async function () {
            try {
                const response = await axios.delete(`https://petstore.swagger.io/v2/pet/${petId}`, {
                    headers: {
                        'accept': 'application/json',
                        'api_key': 'special-key'
                    }
                });

                // Check status code
                expect(response.status).to.equal(expectedStatus);

                // Log response data for debugging
                console.log('Response Data:', response.data);

                // For successful deletions, check that the response message matches expected
                if (expectedStatus === 200) {
                    expect(response.data.message).to.equal(petId.toString());
                } else {
                    // For error statuses, assert that the response data includes the expected message if provided
                    if (expectedMessage) {
                        expect(response.data.message).to.include(expectedMessage);
                    } else {
                        // Ensure that no unexpected message is present
                        expect(response.data.message).to.be.undefined;
                    }
                }
            } catch (error) {
                if (error.response) {
                    // Log error response for debugging
                    console.log('Error Response Data:', error.response.data);

                    // Assert status code for errors
                    expect(error.response.status).to.equal(expectedStatus);

                    // Check that the message matches expected if provided
                    if (expectedMessage) {
                        expect(error.response.data.message).to.include(expectedMessage);
                    } else {
                        // Ensure that no unexpected message is present
                        expect(error.response.data.message).to.be.undefined;
                    }
                } else {
                    // Handle cases where the error does not have a response
                    console.log('Error without response:', error.message);
                    expect.fail(`Error without response: ${error.message}`);
                }
            }
        });
    });
});