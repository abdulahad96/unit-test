const Express = require('express');
const mongoose = require('mongoose');
const Api = require('./src/routes')

var cors = require('cors');
const {connectToDatabase} = require('./src/db');
// const connectToDatabase = require('./src/db');
var app = Express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(Express.json());
require("dotenv").config();


// const connectToDatabase = async () => {
//   const isTestEnvironment = process.env.NODE_ENV === 'test';
//   const databaseURI = isTestEnvironment
//   ? await global.__MONGO_URI__
//   : process.env.MONGODB_URI;
//   console.log(databaseURI,isTestEnvironment,"aaaaaa")

// mongoose.connect(databaseURI,  { useNewUrlParser: true, useUnifiedTopology: true }) .then(r => {
//   console.log('connected');
// })
// .catch(err => {
//   console.log(err);
// });

// };
// connectToDatabase()
// mongoose
//   .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(r => {
//     console.log('connected');
//   })
//   .catch(err => {
//     console.log(err);
//   });


app.use("/api",Api)
app.use("/",(req,res)=>{
  res.send({health:"ok"})
})
const server = app.listen(PORT, () => {
  connectToDatabase()
  console.log("Server is up on port", PORT);
});




module.exports = { app, server };