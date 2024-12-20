import mongoose from 'mongoose';

const redemptionRequestSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  requestedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model('RedemptionRequest', redemptionRequestSchema);
