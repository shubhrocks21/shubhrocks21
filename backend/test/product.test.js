const request = require('supertest');
const app = require('../server'); // Import the Express app

describe('Products API', () => {
  it('should fetch all products', async () => {
    const response = await request(app).get('/api/products');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should seed initial products', async () => {
    const response = await request(app).post('/api/products/seed');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Products seeded successfully.');
  });
});

