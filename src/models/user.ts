import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  fullName: string;
  age: number;
  gender: string;
  location: string;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String },
  location: { type: String },
});

export default mongoose.model<IUser>('User', UserSchema);
