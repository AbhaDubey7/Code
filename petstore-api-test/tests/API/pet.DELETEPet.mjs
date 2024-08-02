import { expect } from 'chai';
import axios from 'axios';
import testData from './pet.DELETEPet.json' assert { type: 'json' };



describe('DELETE /pet/{petId}', function () {
    const baseUrl = 'https://petstore.swagger.io/v2/pet/';

    testData.forEach(({ petId, expectedStatus, expectedMessage }) => {
        it(`should return status ${expectedStatus} for petId ${petId}`, async function () {
            try {
                const response = await axios.delete(`${baseUrl}${petId}`, {
                    headers: {
                        'accept': 'application/json'
                    }
                });

                // Check status code
                expect(response.status).to.equal(expectedStatus);

                // Check response body
                expect(response.data).to.deep.equal({
                    code: expectedStatus,
                    type: 'unknown',
                    message: String(petId)
                });

            } catch (error) {
                if (error.response) {
                    // Log error response for debugging
                    console.log('Error Response Data:', error.response.data);

                    // Fail the test if an error response was received
                    expect.fail(`Unexpected status code ${error.response.status}`);
                } else {
                    // Handle cases where the error does not have a response
                    console.log('Error without response:', error.message);
                    expect.fail(`Error without response: ${error.message}`);
                }
            }
        });
    });
});