import mongoose, { Document } from 'mongoose';
import shortID from 'shortid';

export interface ShortURL extends Document {
  shortId: string;
  longUrl: string;
}

const shortIdSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => shortID,
  },
  longUrl: {
    type: String,
    required: true,
  },
});

const shortUrl = mongoose.model<ShortURL>('shortUrl', shortIdSchema);

export default shortUrl;
