const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const isTestEnvironment = process.env.NODE_ENV === 'test';
    console.log(process.env.NODE_ENV,isTestEnvironment,"aaaaaa")
  const databaseURI = isTestEnvironment
    ? await global.__MONGO_URI__
    : process.env.MONGODB_URI;

  await mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true }) .then(r => {
    console.log('connected');
  })
  .catch(err => {
    console.log(err);
  });

};

module.exports = connectToDatabase;