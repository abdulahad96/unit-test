const request = require('supertest');
const Express = require('express')
const Product = require('../src/routes/product.route');
const { connectToDatabase } = require('../src/db');
var app = Express()
app.use(Express.json());
app.use("/product",Product)
// const Product = require('../models/product.model');
const PORT = process.env.PORT || 3000;
let database;
const server = app.listen(PORT, () => {
  console.log("Server is up on port", PORT);
});
beforeAll(async () => {
  database =  await connectToDatabase()

    server
});

afterAll(async () => {
    // await closeDatabaseConnection();

    // Close the server
    await server.close();
  });
  

describe('Product Routes with success', () => {

  let productId;
  it('should create a product', async () => {
    const response = await request(app)
      .post('/product/')
      .send({
        "name":"product 2",
        "price":"1200",
        "description":"12"
        
        });
        productId = response?.body?.id
        if(!database){
          expect(response.status).toBe(500);
        }
        else{
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
        }
 
  });

  it('should get all products', async () => {
    const response = await request(app).get('/product/all');
    if(!database){
      expect(response.status).toBe(500);
    }
    else{
    expect(response.status).toBe(201);
    }
  });

  it('should get a product by ID', async () => {
    const response = await request(app).get(`/product`).query({id:productId});
    if(!database){
      expect(response.status).toBe(500);
    }
   else if(productId){
    expect(response.status).toBe(200);
    }
    
    else{
      expect(response.status).toBe(500)
    }
  });
  it('should failed to get a product due to wrong ID', async () => {
    const response = await request(app).get(`/product`).query({id:productId+productId});
    if(!database){
      expect(response.status).toBe(500);
    }
   else
    expect(response.status).toBe(404);
   
  });

  it('should update a product by ID', async () => {
    const response = await request(app)
      .patch(`/product`).query({id:productId})
      .send({
        name: "updated product 2",
       });
       if(!database){
        expect(response.status).toBe(500);
      }
     else
    expect(response.status).toBe(200);

   });

  it('should delete a product by ID', async () => {
    const response = await request(app)
      .delete(`/product`).query({id:productId});
      if(!database){
        expect(response.status).toBe(500);
      }
     else
    expect(response.status).toBe(200);

  });
});

describe('Product Routes with failure', () => {
  let productId;
  it('should create a product', async () => {
    const response = await request(app)
      .post('/product/')
      .send({
        "price":"1300",
        "description":"12"
        
        });
        productId = response?.body?.id
    expect(response.status).toBe(500);
  });

  it('should get all products', async () => {
    const response = await request(app).get('/product/all');
    if(database){
    expect(response.status).toBe(201);
    }
    else{
      expect(response.status).toBe(500);
    }
  
  });

  it('should get a product by ID', async () => {
    const response = await request(app).get(`/product`).query({id:productId});
   
      expect(response.status).toBe(500)
  });

  it('should update a product by ID', async () => {
    const response = await request(app)
      .patch(`/product`).query({id:productId})
      .send({
        name: "updated product 2",
       });
    expect(response.status).toBe(500);

   });

  it('should delete a product by ID', async () => {
    const response = await request(app)
      .delete(`/product`).query({id:productId});

    expect(response.status).toBe(500);

  });
});
