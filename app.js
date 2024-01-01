const Express = require('express');
const mongoose = require('mongoose');
const Api = require('./src/routes')

var cors = require('cors');
var app = Express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(Express.json());
require("dotenv").config();
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(r => {
    console.log('connected');
  })
  .catch(err => {
    console.log(err);
  });



app.use("/api",Api)
app.use("/",(req,res)=>{
  res.send({health:"ok"})
})

 const server = app.listen(PORT, () => {
    console.log("Server is up on port", PORT);
  });



module.exports = server;