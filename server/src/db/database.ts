import mongoose from 'mongoose';
import config from 'config';

async function connectDB() {
  mongoose.set('strictQuery', false);
  const mongo_uri = config.get('mongo_uri') as string;
  await mongoose.connect(mongo_uri);

  mongoose.connection.on('connected', () => {
    console.log('Connection to database established');
  });

  mongoose.connection.on('error', () => {
    console.log('Oops! Database connection failed.');
  });
}

export default connectDB;
