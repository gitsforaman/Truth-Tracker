const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  fakeClaim: { type: String, required: true },
  factCounter: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Claim', ClaimSchema);
