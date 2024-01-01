const request = require('supertest');
const app = require('../app'); // Assuming your Express app instance is in the app.js file
const Product = require('../models/product.model');
const connectToDatabase = require('../src/db');

beforeAll(async () => {
  
await connectToDatabase()
});

afterAll(async () => {
  // Teardown tasks after running all tests
  // For example, you may want to disconnect from the test database
});

describe('Product Routes', () => {
  it('should create a product', async () => {
    const response = await request(app)
      .post('/api/product')
      .send({ /* valid product data */ });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    // Additional assertions based on your expected behavior
  });

  it('should get all products', async () => {
    const response = await request(app).get('/api/product/all');
    expect(response.status).toBe(201);
    // Additional assertions based on your expected behavior
  });

  // it('should get a product by ID', async () => {
  //   // Assuming there is an existing product in the database
  //   const existingProduct = new Product({ /* product data */ });
  //   await existingProduct.save();

  //   const response = await request(app).get('/api/product')
  //     .query({ id: existingProduct._id });

  //   expect(response.status).toBe(200);
  //   // Additional assertions based on your expected behavior
  // });

  // it('should update a product by ID', async () => {
  //   // Assuming there is an existing product in the database
  //   const existingProduct = new Product({ /* product data */ });
  //   await existingProduct.save();

  //   const response = await request(app)
  //     .patch('/api/product')
  //     .send({
  //       id: existingProduct._id,
  //       // Other fields to update
  //     });

  //   expect(response.status).toBe(200);
  //   // Additional assertions based on your expected behavior
  // });

  // it('should delete a product by ID', async () => {
  //   // Assuming there is an existing product in the database
  //   const existingProduct = new Product({ /* product data */ });
  //   await existingProduct.save();

  //   const response = await request(app)
  //     .delete('/api/product')
  //     .send({ id: existingProduct._id });

  //   expect(response.status).toBe(200);
  //   // Additional assertions based on your expected behavior
  // });
});
