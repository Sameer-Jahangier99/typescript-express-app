import mongoose, { Schema, Document } from 'mongoose';

export interface IResource extends Document {
  name: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

export const Resource = mongoose.model<IResource>('Resource', ResourceSchema);
