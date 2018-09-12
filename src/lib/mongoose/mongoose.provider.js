import mongoose from 'mongoose';
import config from '../config';

const mongooseConfig = () => {
  const MONGO_URL = config.getMongooseConfig();
  mongoose.connect(
    MONGO_URL,
    error => {
      if (error) console.error(error);
    }
  );
};

export { mongooseConfig };
