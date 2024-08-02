import mongoose from 'mongoose';

const foodPostSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  foodDescription: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true
  },
  pickupTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'claimed'],
    default: 'available'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, 
{timestamps: true});

export const FoodPost = mongoose.model('FoodPost', foodPostSchema);
