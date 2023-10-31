import { connect } from 'mongoose';

import { MONGODB_URI } from './config.js';

export const connectDB = async () => {
  console.log(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await connect(MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }
};
