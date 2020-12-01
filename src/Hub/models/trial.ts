import mongoose, { Schema } from 'mongoose';

export default mongoose.model('Trial', new Schema({
  name: String
}));