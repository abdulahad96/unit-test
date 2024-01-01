const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
  const mongod = new MongoMemoryServer();
  const mongoUri = await mongod.getUri();

  process.env.NODE_ENV = 'test';
  process.env.MONGODB_URI = mongoUri;
  global.__MONGO_URI__ = mongoUri;
};