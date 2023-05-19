import mongoose, { Document } from 'mongoose';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0987654321', 6);

export interface ShortURL extends Document {
  shortId: string;
  longUrl: string;
}

const shortIdSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid,
  },
  longUrl: {
    type: String,
    required: true,
  },
});

const shortUrl = mongoose.model<ShortURL>('shortUrl', shortIdSchema);

export default shortUrl;
