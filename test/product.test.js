const request = require('supertest');
const Express = require('express')
const Product = require('../src/routes/product.route');
const { connectToDatabase } = require('../src/db');
var app = Express()
app.use(Express.json());
app.use("/products",Product)
// const Product = require('../models/product.model');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  connectToDatabase()
  console.log("Server is up on port", PORT);
});
beforeAll(async () => {
  await connectToDatabase()
    server
});

afterAll(async () => {
    // await closeDatabaseConnection();

    // Close the server
    await server.close();
  });
  

describe('Product Routes', () => {
  it('should create a product', async () => {
    const response = await request(app)
      .post('/product/')
      .send({
        "name":"product 2",
        "price":"1200",
        "description":"12"
        
        });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('id');
    // Additional assertions based on your expected behavior
  });

  it('should get all products', async () => {
    const response = await request(app).get('/product/all');
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
