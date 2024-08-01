import { expect } from 'chai';
import request from 'supertest';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Import the path module

// Base URL for API
const BASE_URL = 'https://petstore.swagger.io';

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('POST /pet/{petId}/uploadImage', function() {
  this.timeout(10000); // Set a longer timeout (e.g., 10 seconds)

  it('should upload an image and return a 200 status', async function() {
    // Path to the image file
    const imagePath = path.join(__dirname, '..', 'images', 'labrador-8554882_1920.jpg');

    const response = await request(BASE_URL)
      .post('/v2/pet/29/uploadImage')
      .attach('file', imagePath)
      .set('accept', 'application/json')
      .expect(200);

    expect(response.body).to.have.property('code').that.equals(200);
    expect(response.body).to.have.property('message').that.contains('File uploaded');
  });
});