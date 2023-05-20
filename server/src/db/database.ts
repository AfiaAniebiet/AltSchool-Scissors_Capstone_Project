import mongoose from 'mongoose';
import config from '../config/default';

async function mongodb_connection() {
  mongoose.set('strictQuery', false);

  const mongo_uri = config.mongo_uri as string;
  await mongoose
    .connect(mongo_uri)
    .then((result) => {
      console.log('Connection to database established!');
    })
    .catch((error) => {
      console.log('Oops! Failed to connect to database.');
      process.exit(1);
    });
}

export default mongodb_connection;
