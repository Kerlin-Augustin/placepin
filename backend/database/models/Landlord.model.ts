import mongoose from 'mongoose';

// This is the shape of the landlord database object

const landlordSchema = new mongoose.Schema({
  accountType: String,
  address: String,
  age: Number,
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true, lowercase: true },
  hasAcceptedDisclaimer: Boolean,
  password: { type: String, required: true },
  phoneNumber: Number,
  username: { type: String, required: true },
});

export const LandlordModel = mongoose.model('Landlords', landlordSchema)