import { expect } from 'chai';
import axios from 'axios';
import testData from './pet.GETByStatus.test.json' assert { type: 'json' }; 

async function getPetsByStatus(status) {
    const BASE_URL = 'https://petstore.swagger.io/v2';

    try {
        const response = await axios.get(`${BASE_URL}/pet/findByStatus`, {
            params: {
                status: status
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            console.log('Unexpected Status Code:', response.status);
        }

    } catch (error) {
        if (error.response) {
            console.log('Error Status:', error.response.status);
            console.log('Error Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.log('Error Message:', error.message);
        }
        throw error;
    }
}

describe('GET /pet/findByStatus', function () {
    testData.forEach(({ status, expectedResult }) => {
        it(`should handle status "${status}"`, async function () {
            if (expectedResult === 'error') {
                try {
                    await getPetsByStatus(status);
                } catch (error) {
                    expect(error.response.status).to.equal(400);
                    expect(error.response.data.message).to.contain('Invalid status value');
                }
            } else {
                const data = await getPetsByStatus(status);
                expect(data).to.be.an(expectedResult);
                expect(data).to.not.be.empty;
                data.forEach(pet => {
                    expect(pet.status).to.equal(status);
                });
            }
        });
    });
});