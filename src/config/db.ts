import mongoose from 'mongoose';

const connectDB = async () => {
  const MONGODB_URL = process.env.MONGO_DB_URL || '';
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Connection error', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
