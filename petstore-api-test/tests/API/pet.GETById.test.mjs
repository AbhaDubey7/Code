import { expect } from 'chai';
import axios from 'axios';
import testData from './pet.GETById.test.json' assert { type: 'json' }; // Import test data with assertion

describe('GET /pet/{petId}', function () {
    testData.forEach(({ petId, expectedStatus, expectedCode, expectedMessage }) => {
        it(`should return status ${expectedStatus} for petId ${petId}`, async function () {
            try {
                const response = await axios.get(`https://petstore.swagger.io/v2/pet/${petId}`, {
                    headers: {
                        'accept': 'application/json',
                        'api_key': 'special-key'
                    }
                });

                if (expectedStatus === 200) {
                    expect(response.status).to.equal(expectedStatus);
                    console.log('Pet found:', response.data);
                }
            } catch (error) {
                console.log(`Error: Response Status: ${error.response.status}`);
                console.log('Error Data:', error.response.data);

                expect(error.response.status).to.equal(expectedStatus);

                if (expectedCode && expectedMessage) {
                    expect(error.response.data.code).to.equal(expectedCode);
                    expect(error.response.data.message).to.equal(expectedMessage);
                }
            }
        });
    });
});