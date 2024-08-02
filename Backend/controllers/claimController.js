const Claim = require('../models/Claim');

// Create Claim
exports.createClaim = async (req, res) => {
  const { post } = req.body;
  try {
    const newClaim = new Claim({
      post,
      recipient: req.user.id
    });
    const claim = await newClaim.save();
    res.json(claim);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Claims
exports.getClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ recipient: req.user.id }).populate('post');
    res.json(claims);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update Claim
exports.updateClaim = async (req, res) => {
  const { status } = req.body;
  try {
    let claim = await Claim.findById(req.params.id);
    if (!claim) {
      return res.status(404).json({ msg: 'Claim not found' });
    }
    // Check user
    if (claim.recipient.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    claim.status = status || claim.status;
    await claim.save();
    res.json(claim);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete Claim
exports.deleteClaim = async (req, res) => {
  try {
    let claim = await Claim.findById(req.params.id);
    if (!claim) {
      return res.status(404).json({ msg: 'Claim not found' });
    }
    // Check user
    if (claim.recipient.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await claim.remove();
    res.json({ msg: 'Claim removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
