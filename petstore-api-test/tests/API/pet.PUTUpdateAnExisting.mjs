import { expect } from 'chai';
import axios from 'axios';
import putData from './pet.PUTUpdateAnExisting.json' assert { type: 'json' };

describe('PUT /pet', function () {
    putData.forEach(({ id, category, name, photoUrls, tags, status, expectedStatus, expectedMessage }) => {
        it(`should return status ${expectedStatus} for payload with name ${name}`, async function () {
            try {
                const response = await axios.put('https://petstore.swagger.io/v2/pet', {
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
                    // Handle unexpected status codes for invalid input
                    expect.fail(`Expected status ${expectedStatus} but got status ${response.status}`);
                }
            } catch (error) {
                // Handle the case where no response is received or response is not as expected
                if (error.response) {
                    expect(error.response.status).to.equal(expectedStatus);

                    if (expectedMessage) {
                        expect(error.response.data.message).to.equal(expectedMessage);
                    }
                } else {
                    expect.fail(`Error without response: ${error.message}`);
                }
            }
        });
    });
});