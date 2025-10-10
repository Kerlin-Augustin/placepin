import mongoose from 'mongoose';

// This is the shape of the tenant database object

const tenantSchema = new mongoose.Schema({
  accountType: String,
  address: String,
  age: Number,
  createdAt: { type: Date, default: Date.now },
  email: {type: String, required: true, unique: true, 
  lowercase: true},
  fullName: String,
  hasAcceptedDisclaimer: Boolean,
  landlordPromo: String,
  password: {type: String, required: true},
  phoneNumber: Number,
  username: { type: String, required: true },
})

export const TenantModel = mongoose.model('Tenants', tenantSchema)