const express = require('express');
const { createFoodPost, getFoodPosts, updateFoodPost, deleteFoodPost } = require('../controllers/foodPostController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, createFoodPost);
router.get('/', getFoodPosts);
router.put('/:id', auth, updateFoodPost);
router.delete('/:id', auth, deleteFoodPost);

module.exports = router;
