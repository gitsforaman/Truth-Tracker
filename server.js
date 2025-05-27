const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const Claim = require('./models/claim');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.get('/claims', async (req, res) => {
  const claims = await Claim.find().sort({ _id: -1 });
  res.json(claims);
});

app.post('/claims', async (req, res) => {
  const { fakeClaim, factCounter } = req.body;
  const newClaim = new Claim({ fakeClaim, factCounter });
  await newClaim.save();
  res.json(newClaim);
});

app.delete('/claims/:id', async (req, res) => {
  await Claim.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${5500}`));
