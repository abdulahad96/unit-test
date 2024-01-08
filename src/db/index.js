// const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
const isTestEnvironment = process.env.NODE_ENV === 'test';
const dataBase = isTestEnvironment ? 'test' : 'development';
const sequelize = new Sequelize({
  dialect: 'mysql',
  ...require('../config/config.json')[dataBase],
});
const connectToDatabase = async () => {
  try{
    await sequelize.sync({force:true})
  await sequelize.authenticate()
  console.log("connected")
}catch(err){
console.log('failed',err)
}
  //   const isTestEnvironment = process.env.NODE_ENV === 'test';
  //   console.log(process.env.NODE_ENV,isTestEnvironment,"aaaaaa")
  // const databaseURI = isTestEnvironment
  //   ? await global.__MONGO_URI__
  //   : process.env.MONGODB_URI;

  // await mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true }) .then(r => {
  //   console.log('connected');
  // })
  // .catch(err => {
  //   console.log(err);
  // });

};

module.exports = {sequelize,connectToDatabase};