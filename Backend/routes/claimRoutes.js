const express = require('express');
const { createClaim, getClaims, updateClaim, deleteClaim } = require('../controllers/claimController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, createClaim);
router.get('/', auth, getClaims);
router.put('/:id', auth, updateClaim);
router.delete('/:id', auth, deleteClaim);

module.exports = router;
