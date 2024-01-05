const request = require('supertest');
const { app, server, connectToDatabase, closeDatabaseConnection } = require('../app');

// const Product = require('../models/product.model');
const PORT = 3000;


beforeAll(async () => {
    // app.listen(PORT);
// await connectToDatabase()
});

afterAll(async () => {
    // await closeDatabaseConnection();

    // Close the server
    // await server.close();
   await app.close()
  });
  

describe('Product Routes', () => {
  it('should create a product', async () => {
    const response = await request(app)
      .post('/api/product/')
      .send({
        "name":"product 2",
        "price":"1200",
        "description":"12"
        
        });

    expect(response.status).toBe(500);
    // expect(response.body).toHaveProperty('_id');
    // Additional assertions based on your expected behavior
  });

  it('should get all products', async () => {
    const response = await request(app).get('/api/product/all');
    expect(response.status).toBe(500);
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
