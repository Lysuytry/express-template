import mongoose, { Schema } from 'mongoose';

const userSchema = Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    createdBy: { type: Schema.Types.ObjectId },
    updatedBy: { type: Schema.Types.ObjectId }
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
