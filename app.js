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

  app.listen(3001, () => {
    console.log("Server is up on port", 3000);
  });


module.exports = app;